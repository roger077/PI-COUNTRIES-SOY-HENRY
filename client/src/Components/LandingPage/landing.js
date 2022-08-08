import React from 'react'
import style from './landing.module.css'
import {Link}from 'react-router-dom'

export default function Landing(){
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <h1>Henry Countries</h1>
                <Link to='/home'>
                    <button className={style.btnEnter}>Enter</button>
                </Link>
            </div>
        </div>
    )
}