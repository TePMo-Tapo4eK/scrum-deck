import s from './styles/Header.module.scss'
import back from '../../back.svg'
import add from '../../add.svg'

export const Header = (props:any) => {
    return(
        <div className={s.Header}>
            <div className={s.Header_Hello}>
                <div className={s.Header_Hello_img}><img src={props.img}/></div>
                <h3>Привет, {props.name}</h3>
            </div>
            <div className={s.Header_Icon} onClick={() => {props.setClose(!props.close); props.setModal(!props.modal)}}><img src={props.close ? add : back}/></div>
        </div>
    )
}