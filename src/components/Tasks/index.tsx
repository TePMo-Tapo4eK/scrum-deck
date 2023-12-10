import s from './styles/Tasks.module.scss'
import edit from '../../edit.svg'

export const Tasks = (props:any) => {
    console.log(props.array)
    props.array.sort((a:any, b:any) => {
        if (a.State < b.State) {
          return -1;
        }
        if (a.State > b.State) {
          return 1;
        }
        return 0;
      });
    return(
        <div className={s.Tasks}>
            <ul className={s.Tasks_List}>
                {props.array.map((e:any) => 
                <li onClick={()=>{props.setModal(!props.modal); props.setModalData(e); props.setClose(!props.close)} } className={s.Task} style={{border: `solid 0.3rem ${ e.State == 0 ? "#F5F378" : e.State == 1 || e.State == 3 ? "#DCC1FF" : e.State == 2 ? "#EC704B" : "#FFFFFF"}`}}>
                <div className={s.Task_Name}>
                    <p>{e.Name}</p>
                    <a><img src={edit}/></a>
                </div>
                <div className={s.Task_Status}>
                    <p>{e.Deadline}</p>
                    <p>{e.State == 0 ? "Ожидается" : e.State == 1 ? "В работе" : e.State == 2 ? "Тестирование" : e.State == 3 ? "На исправлении": "Завершено"}</p>
                    <p>{e.Executor.Username}</p>
                </div>
            </li>
                )}               
            </ul>
        </div>
    )
}