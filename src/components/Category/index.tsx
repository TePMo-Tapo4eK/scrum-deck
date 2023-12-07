import s from './styles/Category.module.scss'

export const Category = () => {
    return(
        <div className={s.Category}>
            <ul className={s.Category_List}>
                <li className={s.active} style={false ? {border: "solid 0.3rem #F5F377"} : {border: "none", backgroundColor: "#F5F377", color: "#1e1e1e", fontWeight: 500}}>Все задачи</li>
                <li className={s.inactive} style={{border: "solid 0.3rem #F5F378"}}>Без исполнителя</li>
                <li className={s.inactive} style={{border: "solid 0.3rem #DCC1FF"}}>В работе</li>
                <li className={s.inactive} style={{border: "solid 0.3rem #EC704B"}}>Тестируется</li>
                <li className={s.inactive} style={{border: "solid 0.3rem #ffffff"}}>Готово</li>
                <li>~</li>
                <li className={s.inactive} style={{border: "solid 0.3rem #ffffff"}}>Мои задачи</li>
            </ul>
        </div>
    )
}