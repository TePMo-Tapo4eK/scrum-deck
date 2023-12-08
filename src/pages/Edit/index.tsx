import s from './styles/Edit.module.scss'
export const Edit = (props:any) => {
    return(
        <div className={s.Edit}>
            <div className={s.Edit_Task}>
                <input className={s.h1} value={props.data.Name}/>
                <textarea className={s.h2} value={props.data.Descryption}/>
            </div>
            <div className={s.Edit_Info}>
                <h1>Сведения</h1>
                <ul className={s.Edit_Info_points}>
                    <li><p>Исполнитель</p><p style={{color: "#F5F378"}}>{props.data.Executor.Username}</p></li>
                    <li><p>Срок сдачи</p><p style={{color: "#EC704B"}}>{props.data.Deadline}</p></li>
                    <li><p>Статус</p><p style={{color: "#F5F378"}}>{props.data.State == 0 ? "О" : "-"}</p></li>
                </ul>
            </div>
            <div className={s.Edit_Button}>
                <p>Удалить задачу</p>
            <button style={{backgroundColor: "#DCC1FF"}}>Сохранить изменения</button>
            </div>
        </div>
    )
}