import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import { Category } from './components/Category';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

declare global {
  interface Window {
    Telegram: any;
  }
}
const tg = window.Telegram.WebApp;


function App() {

  const [data, setData] = useState([]);
  let userId = 19
  const [userTeams, setUserTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      axios.get('https://cors-anywhere.herokuapp.com/' + 'http://195.80.50.93:25767/GetMyTeams/' + userId)
      .then((response) => {
        setUserTeams(response.data.TeamsList);
    })
    .catch((error) => {
      console.error(error);
  });
    };
    const fetchData = async () => {
      axios.get('https://cors-anywhere.herokuapp.com/' + 'http://195.80.50.93:25767/GetTasks/' + userTeams[0])
      .then((response) => {
        setData(response.data);
    })
    .catch((error) => {
      console.error(error);
  });
    };
    fetchTeams();
    fetchData();
  }, []);

  console.log(userTeams)
  console.log(data)


  return (
    <>
      <Header
        img={tg.initDataUnsafe?.user?.photo_url}
        name={tg.initDataUnsafe?.user?.username ? tg.initDataUnsafe.user.username : 'Друг'}
      />
      {userId}
      {JSON.stringify(userTeams)}
      {JSON.stringify(data)}
      <Category />
      <Tasks array={data} />
    </>
  );
}

export default App;