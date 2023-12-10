import { useState, useEffect } from 'react';
import axios from 'axios';
import s from './styles/Choose.module.scss';

export const Select = ({ispoln, setCom,com,setIspoln}:any) => {
  const [options, setOptions]:any = useState([]);
  const [choose, setChoose]:any = useState(null);
  console.log(ispoln)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/http://195.80.50.93:25767/GetTeam/9');
        const data = response.data.Members;
        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleOptionClick = (option:any) => {
    setChoose(option);
  };

  return (
    <div className={s.Select}>
      <ul className={s.Select_Options}>
        {options.map((option:any) => (
          <li key={option.Id} onClick={() => handleOptionClick(option)}>
            {option.Username}
          </li>
        ))}
      </ul>
      {choose && (
        <div className={s.Select_Choose}>
          <h2>Выбранный пользователь:</h2>
          <p>{choose.Username}</p>
        </div>
      )}
      <button className={s.but}  onClick={() => {console.log(choose); setCom(!com); setIspoln(choose)}}>Выбрать как исполнителя</button>
      
      <button className={s.ina}>Оставить без исполнителя</button>
    </div>
  );
};