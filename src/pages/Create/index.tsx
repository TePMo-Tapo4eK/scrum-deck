import { useState } from 'react';
import s from './styles/Create.module.scss';
import axios from 'axios';

export const Create = (props: any) => {

  const tg = window.Telegram.WebApp;

   
  let modalData = {
    "Id": 9,
    "Name": "Название",
    "Descryption": "Описание задачи",
    "Executor": {
      "Id": `${props.userPos}`,
      "TgId": tg.initDataUnsafe?.user?.id,
      "Username": tg.initDataUnsafe?.user?.username,
      "Role": 0
    },
    "Deadline": "2023-12-07",
    "State": 0
  };

  const [Name, setName] = useState(modalData.Name);
  const [Des, setDes] = useState(modalData.Descryption);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDes(event.target.value);
  };
  const updateTask = async (modalData1:any) => {
    try {
      const response = await axios.post(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/CreateTask/${modalData1.Id}`, modalData1);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const CreateTask = () =>{
    modalData = {
      "Id": 9,
      "Name": Name,
      "Descryption": Des,
      "Executor": {
        "Id": `${props.userPos}`,
        "TgId": tg.initDataUnsafe?.user?.id,
        "Username": tg.initDataUnsafe?.user?.username,
        "Role": 0
      },
      "Deadline": "2023-12-07",
      "State": 0
    };
    console.log(modalData)
  }
  return (
    <div className={s.Edit}>
      <div className={s.Edit_Task}>
        <input className={s.h1} value={Name} onChange={handleNameChange} />
        <textarea className={s.h2} value={Des} onChange={handleDesChange} />
      </div>
      <div className={s.Edit_Info}>
        <h1>Сведения</h1>
        <ul className={s.Edit_Info_points}>
          <li>
            <p>Исполнитель</p>
            <p style={{ color: '#F5F378' }}>{modalData.Executor.Username}</p>
          </li>
          <li>
            <p>Срок сдачи</p>
            <p style={{ color: '#EC704B' }}>{modalData.Deadline}</p>
          </li>
          <li>
            <p>Статус</p>
            <p style={{ color: '#F5F378' }}>{modalData.State == 0 ? 'О' : '-'}</p>
          </li>
        </ul>
      </div>
      <div className={s.Edit_Button}>
        <button onClick={()=>{CreateTask();updateTask(modalData)}} style={{ backgroundColor: '#DCC1FF' }}>Создать задачу</button>
      </div>
    </div>
  );
};