import React from 'react';
import style from './paginado.module.css'
export default function Paginado({allCountries,countriesPerPage,paginado,currentPage}){
    let pageNumbers=[]
    for(let i=0;i<Math.ceil(allCountries/countriesPerPage);i++) pageNumbers.push(i);
    return(
        <div className={style.paginadoContainer}>
            <div className={style.currentPag} onClick={()=>{if(currentPage>1)paginado(currentPage-1)}} >{'<<'}</div>
            {
                pageNumbers.map(p=><div className={style.currentPag} key={p} onClick={()=>paginado(p+1)}>{p+1}</div>)
            }
            <div className={style.currentPag} onClick={()=>{
                if(currentPage<allCountries)paginado(currentPage+1)
                }} 
                >
                {'>>'}
            </div>
           
        </div>
    )
}
