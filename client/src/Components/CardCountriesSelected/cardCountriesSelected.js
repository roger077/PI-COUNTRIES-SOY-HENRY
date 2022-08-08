import style from './cardCountriesSelected.module.css'

export default function cardCountry({name,onClose}){
    return(
        <div>
            <div className={style.cardCountryContainer}>
                <input className={style.btnClose} type='button' value='x' onClick={()=>onClose(name)}/>
                <span>{name}</span>
            </div>
        </div>
    )
}