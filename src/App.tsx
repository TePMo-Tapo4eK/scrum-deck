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



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://195.80.50.93:25767/GetTasks/9');
      setData(response.data);
    };

    fetchData();
  }, []);
  console.log(data)
  const tg = window.Telegram.WebApp;

  return (
    <>
      <Header
        img={tg.initDataUnsafe?.user?.photo_url}
        name={tg.initDataUnsafe?.user?.username ? tg.initDataUnsafe.user.username : 'Друг'}
      />
      <Category />
      <Tasks array={data} />
    </>
  );
}

export default App;