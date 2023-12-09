import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import { Category } from './components/Category';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Edit } from './pages/Edit';

declare global {
  interface Window {
    Telegram: any;
  }
}
const tg = window.Telegram.WebApp;


function App() {
  const [sort, setSort] = useState(1);
  const [close, setClose] = useState(true);
  const [modal, setModal] = useState(!true);
  const [modalData, setModalData] = useState({});
  const [data, setData]:any = useState([]);
  const [userPos, setUserPos] = useState([])
  let userId = tg.initDataUnsafe?.user?.id
  const [userTeams, setUserTeams]:any = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posResponse = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetMyId/${userId}`);
        const posData = posResponse.data;
        setUserPos(posData);

        const teamsResponse = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetMyTeams/${posData}`);
        const teamsData = teamsResponse.data.TeamsList;
        setUserTeams(teamsData);

        const tasksResponce = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetTasks/${teamsData[0].Id}`);
        const teamsTasks = tasksResponce.data;
        setData(teamsTasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);
  console.log(userPos)
  console.log(data)
  

  return (
    <>
      <Header
        img={tg.initDataUnsafe?.user?.photo_url}
        name={tg.initDataUnsafe?.user?.username ? tg.initDataUnsafe.user.username : 'Друг'}
        setModal={setModal} setClose={setClose} close={close} modal={modal}
        setModalData={setModalData} modalData={modalData}/>
      {modal ? <Edit data={modalData}/> : null}
      <Category sort={sort} setSort={setSort}/>
      {userId}
      {JSON.stringify(userTeams[0])}
      {JSON.stringify(userTeams)}
      {JSON.stringify(data)}

      <Tasks array={data} setClose={setClose} close={close} modal={modal} setModal={setModal} setModalData={setModalData}/>
    </>
  );
}

export default App;