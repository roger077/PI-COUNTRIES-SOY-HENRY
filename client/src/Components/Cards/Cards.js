
import Card from '../Card/card.js'
import style from './Cards.module.css'


export default function Cards({currentCountries}){

    
    return(
        <div className={style.container}>
            {
                currentCountries&&currentCountries.map(c=><Card name={c.name} continent={c.continent} id={c.id} key={c.id} image={c.flag} />)
                
            }
        </div>
    )
}