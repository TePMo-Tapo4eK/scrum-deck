
import './App.css'
import { Category } from './components/Category';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';
declare global {
  interface Window {
    Telegram: any;
  }
}
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Define the async thunk action
// export const fetchData = createAsyncThunk(
//   'data/fetchData',
//   async () => {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   }
// );

function App() {
  const tg = window.Telegram.WebApp
  return (
    <>
    <Header img={tg.initDataUnsafe?.user?.photo_url} name={tg.initDataUnsafe?.user?.username ? tg.initDataUnsafe.user.username : "Друг"}/>
    <Category/>
    <Tasks/>
      {/* <Header/>
      <Preload/>
      <Category/>
      <Tasks/> */}
    </>
  )
}

export default App
