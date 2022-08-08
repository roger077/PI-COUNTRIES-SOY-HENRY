import React from 'react'
import style from './searchBar.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {searchCountry} from'../../redux/actions/index'

export default function SearchBar({setCurrentPage}){
    const [countrySearch,setCountry]=useState('')
    const dispatch=useDispatch()
    function handleSearch(){
        dispatch(searchCountry(countrySearch))
        setCountry('')
        setCurrentPage(1)
    }
    return(
        <div className={style.searchContainer}>
            <input className={style.inpSearch} type='text' value={countrySearch} onChange={(e)=>setCountry(e.target.value)} placeholder='Country...'></input>
            <button className={style.btnSearch} onClick={handleSearch}>Search</button>
        </div>
    )
}