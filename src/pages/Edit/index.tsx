import { useState } from 'react';
import s from './styles/Edit.module.scss';
import axios from 'axios';

export const Edit = (props: any) => {
  const [Name, setName] = useState(props.data.Name);
  const [Des, setDes] = useState(props.data.Descryption);
  const [dead, setDead] = useState(props.data.Deadline);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDes(event.target.value);
  };
  const handleDeadChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDead(event.target.value);
  };

  const tg = window.Telegram.WebApp;
  let modalData={}
  const CreateTask = () => {
    modalData = {
      "Id": 9,
      "Name": Name,
      "Descryption": Des,
      "Executor": {
        "Id": `${props.ispoln}`,
        "TgId": tg.initDataUnsafe?.user?.id,
        "Username": tg.initDataUnsafe?.user?.username,
        "Role": 0
      },
      "Deadline": dead,
      "State": 0
    };
console.log(modalData)}
    const updateTask = async (modalData1:any) => {
        try {
          const response = await axios.post(`https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/UpdateTask/${modalData1.Id}`, modalData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div className={s.Edit}>
      <div className={s.Edit_Task}>
        <input className={s.h1} value={Name} onChange={() => handleNameChange} />
        <textarea className={s.h2} value={Des} onChange={() => handleDesChange} />
      </div>
      <div className={s.Edit_Info}>
        <h1>Сведения</h1>
        <ul className={s.Edit_Info_points}>
          <li>
            <p>Исполнитель</p>
            <p onClick={() => props.setCom(!props.com)} style={{ color: '#F5F378' }}>{props.data.Executor.Username}</p>
          </li>
          <li>
            <p>Срок сдачи</p>
            <input className={s.in} style={{ color: '#EC704B' }} value={dead} onChange={() => handleDeadChange} />
          </li>
          <li>
            <p>Статус</p>
            <p style={{ color: '#F5F378' }}>{props.data.State == 0 ? 'О' : '-'}</p>
          </li>
        </ul>
      </div>
      <div className={s.Edit_Button}>
        <p>Удалить задачу</p>
        <button onClick={() => {CreateTask(); updateTask(modalData)}} style={{ backgroundColor: '#DCC1FF' }}>Сохранить изменения</button>
      </div>
    </div>
  );}