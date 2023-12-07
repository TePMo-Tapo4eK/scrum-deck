import s from './styles/Tasks.module.scss'
import edit from '../../edit.svg'

export const Tasks = (props:any) => {
    console.log(props.array)
    return(
        <div className={s.Tasks}>
            <ul className={s.Tasks_List}>
                <li className={s.Task} style={{border: "solid 0.3rem #F5F377"}}>
                    <div className={s.Task_Name}>
                        <p>Купить всей команде конфет</p>
                        <a><img src={edit}/></a>
                    </div>
                    <div className={s.Task_Status}>
                        <p>11.12.2023</p>
                        <p>В работе</p>
                        <img/>
                    </div>
                </li>
            </ul>
        </div>
    )
}