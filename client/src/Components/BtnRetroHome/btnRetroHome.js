import React from "react";
import { Link } from "react-router-dom";
import style from './btnRetroHome.module.css'
export default function BtnRetro(){
    return(
        <div className={style.btnRetroContainer}>
            <Link to='/home'>
                <button className={style.btnRetro}>←</button>
            </Link>
        </div>
    )
}