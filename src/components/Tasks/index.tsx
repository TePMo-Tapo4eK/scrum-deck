import s from './styles/Tasks.module.scss'
import edit from '../../edit.svg'

export const Tasks = (props:any) => {
    console.log(props.array)
    return(
        <div className={s.Tasks}>
            <ul className={s.Tasks_List}>
                {props.array.map((e:any) => 
                    <li className={s.Task} style={{border: "solid 0.3rem #F5F377"}}>
                    <div className={s.Task_Name}>
                        <p>{e.Name}</p>
                        <a><img src={edit}/></a>
                    </div>
                    <div className={s.Task_Status}>
                        <p>{e.Deadline}</p>
                        <p>{e.State}</p>
                        <p>{e.Executor.Username}</p>
                    </div>
                </li>
                )}               
            </ul>
        </div>
    )
}