import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Category } from './components/Category';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Edit } from './pages/Edit';
import { Create } from './pages/Create';
import { Select } from './components/Choose';

declare global {
  interface Window {
    Telegram: any;
  }
}

const tg = window.Telegram.WebApp;

function App() {
  const [sort, setSort] = useState(1);
  const [close, setClose] = useState(true);
  const [modal, setModal] = useState(false);
  const [create, setCreate] = useState(false);
  const [com, setCom] = useState(false);

  const [data, setData] = useState([]);
  const [userPos, setUserPos] = useState([]);
  const [userTeams, setUserTeams] = useState([]);
  const [ispoln, setIspoln] = useState();
  const [team, setTeam] = useState(9);

  const userId = tg.initDataUnsafe?.user?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posResponse = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetMyId/${userId}`);
        const posData = posResponse.data;
        setUserPos(posData);

        const teamsResponse = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetMyTeams/${userPos}`);
        const teamsData = teamsResponse.data.TeamsList;
        setUserTeams(teamsData);
        setTeam(teamsData[0].Id)

        const tasksResponce = await axios.get(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetTasks/${teamsData[0].Id}`);
        const teamsTasks = tasksResponce.data;
        setData(teamsTasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userId, userPos]);

  const [modalData, setModalData] = useState([])

 


  return (
    <>
      <Header
        img={tg.initDataUnsafe?.user?.photo_url}
        name={tg.initDataUnsafe?.user?.username ? tg.initDataUnsafe.user.username : 'Друг'}
        setModal={setCreate}
        setClose={setClose}
        close={close}
        modal={create}
      />
      
      {com ? <Select ispoln={ispoln} setIspoln={setIspoln} setCom={setCom} com={com}/> : null}
      {modal ? <Edit         com={com}
        ispoln={ispoln}
        setCom={setCom}
        setIspoln={setIspoln}

        team={team} data={modalData} userPos={userPos} /> : null}
      {create ? <Create userPos={userPos}/> : null}
      <div className='View'>
        
        <Category sort={sort} setSort={setSort} />
      <Tasks
        array={data}
        setClose={setClose}
        close={close}
        modal={modal}
        setModal={setModal}
        setModalData={setModalData}
      />
      </div>
    </>
  );
}

export default App;