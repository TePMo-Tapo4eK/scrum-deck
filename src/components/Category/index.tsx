import s from './styles/Category.module.scss'

export const Category = (props:any) => {
    let arr = [
        {
            name: "Все задачи",
            color: "#F5F377"
        },
        {
            name: "Без исполнителя",
            color: "#F5F378"
        },
        {
            name: "Ожидается",
            color: "#F5F377"
        },
        {
            name: "В работе",
            color: "#DCC1FF"
        },
        {
            name: "Тестируется",
            color: "#EC704B"
        },
        {
            name: "Готово",
            color: "#FFFFFF"
        },
        {
            name: "~",
            color: "#FFFFFF"
        },
        {
            name: "Мои задачи",
            color: "#FFFFFF"
        },
    ]
    return(
        <div className={s.Category}>
            <ul className={s.Category_List}>
                {
                    arr.map((e, i) => 
                    i == 6 ?  <li>~</li> : i == 0 ? 
                    <li onClick={() => props.setSort(i)} className={s.active} style={props.sort == i ? {border: "none", backgroundColor: e.color, color: "#1e1e1e", fontWeight: 500, width: "100%"} : {border: `solid 0.3rem ${e.color}`, width: "100%"}}>{e.name}</li>
                    :
                    <li onClick={() => props.setSort(i)} className={s.active} style={props.sort == i ? {border: "none", backgroundColor: e.color, color: "#1e1e1e", fontWeight: 500} : {border: `solid 0.3rem ${e.color}`}}>{e.name}</li>
                    )
                }
            </ul>
        </div>
    )
}