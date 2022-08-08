import React, { useState } from 'react';
import style from './home.module.css';
import Navbar from '../Navbar/navbar.js';
import Cards from '../Cards/Cards.js';
import Paginado from '../Paginado/paginado'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions';

export default function Home(){
    const dispatch=useDispatch()
    const allCountries=useSelector(state=>state.countries)
    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])
    const [orden,setOrden]=useState('')
    const [currentPage,setCurrentPage]=useState(1);
    const countriesPerPage=10;
    const lastIndexCountries=currentPage*countriesPerPage;
    const firstIndexCountries=lastIndexCountries-countriesPerPage;
    const currentCountries=allCountries.slice(firstIndexCountries,lastIndexCountries)    
    function paginado(number){
        setCurrentPage(number)
    }
    return(
        <div className={style.homeContainer}>
            <Navbar setOrden={setOrden} setCurrentPage={setCurrentPage}/> 
            <Cards currentCountries={currentCountries}/>   
            <Paginado currentPage={currentPage} allCountries={allCountries.length} countriesPerPage={countriesPerPage} paginado={paginado}/>
        </div>
    )
}