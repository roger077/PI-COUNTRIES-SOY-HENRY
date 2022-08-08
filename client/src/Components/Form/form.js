import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import style from './form.module.css'
import CardCountries from '../CardCountriesSelected/cardCountriesSelected';
import{postActivity} from '../../redux/actions/index'
import axios from 'axios'
import BtnRetro from '../BtnRetroHome/btnRetroHome';
export default function Form(){
    const dispatch=useDispatch()
    const allCountries=useSelector(state=>state.allCountries)
    const [input,setInput]=useState({
        name:'',
        difficulty:'1',
        duration:'0'
    });
    const [select,setSelect]=useState({
        season:'Summer',
        countries:[]
    })
    const [error,setError]=useState({})
    function handleInputChange(e){
        setInput(prevState=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
        
        let err= validateInp({...input,[e.target.name]:e.target.value});
        setError(prevState=>{
            return{
                ...prevState,
                [e.target.name]:err[e.target.name]
            }
        })
    }
    function closeCountry(countryName){
        setSelect(prevState=>{
            return{
                ...prevState,
                countries:prevState.countries.filter(c=>c!==countryName)
            }
        })
        console.log(select.countries)
    }

    function validateInp(current){
        let err={}
        if(!current.name) err.name='name is required'
        console.log(err)
        if(!current.duration) err.duration='duration is required'
        if(parseInt(current.duration)<1) err.duration='duration is invalid'
        return err;
    }
    function handleSelectChange(e){
        if(e.target.name==='countries'){
            if(!select[e.target.name].includes(e.target.value))setSelect(prevState=>{
                return{
                    ...prevState,
                    [e.target.name]:[...prevState[e.target.name], e.target.value]
                }
            })
        }else{
            setSelect(prevState=>{
                return{
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            })
        }
        
    }
    function handleSubmit(e){
        e.preventDefault();
        
        if(!error.name&&!error.difficulty&&!error.duration&&select.countries.length&&select.season){
            axios.post('http://localhost:3001/activities',{
            name:input.name,
            difficulty:input.difficulty,
            duration:`${input.duration} hours`,
            season:select.season,
            countries:select.countries
            })
            dispatch(postActivity(input.name))
            setInput(prevState=>{
                return{
                    name:'',
                    difficulty:'1',
                    duration:'0'
                }
            })
            setSelect(prevState=>{
                return{
                    season:'',
                    countries:[]
                }
            })
            alert('Activity Loaded!')
        }
        if(!select.countries.length) alert('Countries is required')
        if(!select.season) alert('Season is required')
        
    }
    return(

        <div className={style.formContainer}>
            <BtnRetro/>
            <form onSubmit={handleSubmit}>
                <h2>Create Activity</h2>
                <p className={style.labelForm}>Name</p>
                <input type='text' className={style.inpForm} value={input.name} onChange={handleInputChange} name='name'/>
                {!!error.name&&<p className={style.danger}>{error.name}</p>}
                <p className={style.labelForm}>Difficulty: {input.difficulty}</p>
                <input type='range' min='1' max='5' name='difficulty' value={input.difficulty} onChange={handleInputChange}/>
                <p className={style.labelForm}>Duration</p>
                {!!error.duration&&<p className={style.danger}>{error.duration}</p>}
                <input type='number' className={style.inpForm} name='duration' value={input.duration} onChange={handleInputChange}/>
                <label className={style.labelForm}>Hours</label>
                <p className={style.labelForm}>Season</p>
                <select value={select.season} name='season' onChange={handleSelectChange}>
                    {
                        ['Summer','Autumn','Winter','Spring'].map(s=><option value={s}>{s}</option>)
                    }
                </select>
                <p className={style.labelForm}>Countries</p>
                    {
                        select.countries.length?select.countries.map(c=><CardCountries name={c} onClose={closeCountry} />):null
                    }
                <select name='countries' onChange={handleSelectChange}>
                    {
                        allCountries.map(c=><option value={c.name}>{c.name}</option>)
                    }
                </select>
                <br/>
                <br/>
                <input className={style.submit} type='submit' value='Submit'/>
            </form>
            
        </div>
    )
}