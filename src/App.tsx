
import './App.css'
import { Header } from './components/Header'
declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  
  const tg = window.Telegram.WebApp
  return (
    <>
    <Header name={tg.initDataUnsafe.user.username ? tg.initDataUnsafe.user.username : "Друг"}/>
      {/* <Header/>
      <Preload/>
      <Category/>
      <Tasks/> */}
    </>
  )
}

export default App
