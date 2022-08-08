import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {getDetails,cleanDetails} from '../../redux/actions/index'
import style from './detail.module.css'
import BtnRetro from "../BtnRetroHome/btnRetroHome"
export default function Detail(){
    const dispatch=useDispatch()
    const {id}=useParams()
    const detailsCountry=useSelector(state=>state.details)
    useEffect(()=>{
        dispatch(getDetails(id))
        
        return()=>dispatch(cleanDetails())
    },[dispatch])
    const [details]=detailsCountry;
    return(

        details?<div className={style.detailContainer}>
            <BtnRetro/>
            <div className={style.infoDetailsContainer}>
                <img src={details.flag}></img>
                <div className={style.infoDetail}>
                    <p><b>Name:</b> {details.name}</p>
                    <p><b>Id:</b> {details.id}</p>
                    <p><b>Continent:</b> {details.continent}</p>
                    <p><b>Capital:</b> {details.capital}</p>
                    <p><b>Subregion:</b> {details.subregion}</p>
                    <p><b>Area:</b> {details.area}</p>
                    <p><b>Poblation:</b> {details.poblation}</p>
                    <p><b>Activities:</b></p> 
                    <div>
                            {
                                details.activities.length>0?details.activities.map(a=>
                                    <ul>
                                        <h3>{a.name}</h3>
                                        <li> Difficulty: {a.difficulty}</li>
                                        <li>Duration: {a.duration}</li>
                                        <li>Season: {a.season}</li>
                                    </ul>
                                ):'-'
                            }
                    </div>
                </div>
            </div>
        </div>:<p>loading...</p>
    )
}
