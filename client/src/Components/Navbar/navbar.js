import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/searchBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllCountries } from '../../redux/actions/index'
import {filterCountriesByActivity,filterCountriesByContinent,sortCountriesByAlph,sortCountriesByPoblation}from'../../redux/actions/index'
export default function Navbar({setCurrentPage,setOrden}){
    const dispatch=useDispatch()
    const allActivities=useSelector(state=>state.activities);
    const allContinents=useSelector(state=>state.continents);
    function handleFilterByActivities(e){
        dispatch(filterCountriesByActivity(e.target.value))
        setCurrentPage(1)
    }
    function handleFilterByContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
        setCurrentPage(1)
    }
    function handleSortByAlph(e){
        dispatch(sortCountriesByAlph(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleSortByPoblation(e){
        dispatch(sortCountriesByPoblation(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    return(
        <div className={style.navbarContainer}>
            <div className={style.navbar}>
                <h2 onClick={()=>{
                    dispatch(getAllCountries())
                    setCurrentPage(1)
                }}>Henry Countries</h2>
                <ul>
                    <li>
                        <SearchBar setCurrentPage={setCurrentPage}></SearchBar>
                    </li>
                    <li>
                        <Link to='/home/create'>
                            <button className={style.btnActivity}>Create activity</button>
                        </Link>
                    </li>
                    <li>
                        <select name='poblation' onChange={handleSortByPoblation}>
                            <option>Order by poblation </option>
                            <option value='AS'>Ascending</option>
                            <option value='DES'>Descending</option>
                        </select>
                    </li>
                    <li>
                        <select name='alphabetical' onChange={handleSortByAlph}>
                            <option>Alphabetical order</option>
                            <option value='AS'>Ascending</option>
                            <option value='DES'>Descending</option>
                        </select>
                    </li>
                    <li>
                        <select onChange={handleFilterByActivities} name='activitiesType'>
                            <option value='All'>Filter by activity</option>
                            {
                                allActivities.length&&allActivities.map(a=><option value={a}>{a}</option>)
                            }
                        </select>
                    </li>
                    <li>
                        <select onChange={handleFilterByContinent} name='continents'>
                            <option value='All'>Filter by Continent</option>
                            {  
                                allContinents.length&&allContinents.map(c=><option value={c}>{c}</option>)
                            }
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    )
}