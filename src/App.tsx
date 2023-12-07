
import './App.css'
import { Header } from './components/Header'


function App() {
  const tg = window.Telegram.WebApp
  return (
    <>
    <Header name={tg.initDataUnsafe?.user?.username}/>
      {/* <Header/>
      <Preload/>
      <Category/>
      <Tasks/> */}
    </>
  )
}

export default App
