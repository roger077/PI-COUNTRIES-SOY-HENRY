import axios from 'axios';
import { GET_ALL_COUNTRIES, SEARCH_COUNTRY,POST_ACTIVITY,FILTER_COUNTRIES_BY_ACTIVITY,FILTER_BY_CONTINENT,SORT_COUNTRIES_BY_ALPH,SORT_COUNTRIES_BY_POBLATION,GET_DETAILS, CLEAN_DETAILS} from './types';

export function getAllCountries(){
    return async function(dispatch){
        const countriesByAxios= await axios.get('http://localhost:3001/countries');
        const allCountries=countriesByAxios.data;
        console.log(allCountries)
        return dispatch({
            type:GET_ALL_COUNTRIES,
            payload:allCountries
        })
    }
}

/*export function getAllCountries(){
    return  function(dispatch){
        axios.get('http://localhost:3001/countries')
        .then(res=>dispatch({
            type:GET_ALL_COUNTRIES,
            payload:res.data
        }))
    }
}*/
export function searchCountry(nameCountry){
    return async function(dispatch){
        const countryByAxios= await axios.get(`http://localhost:3001/countries?name=${nameCountry}`)
        const country=await countryByAxios.data;
        console.log(country)
        return dispatch({
            type:SEARCH_COUNTRY,
            payload:country
        })
    }
}

export function filterCountriesByActivity(name){
    return async function(dispatch){
        return dispatch({
            type:FILTER_COUNTRIES_BY_ACTIVITY,
            payload:name
        })
    }
}

export function postActivity(activity){
    return async function(dispatch){
        return dispatch({
            type:POST_ACTIVITY,
            payload:activity
        })
    }
}
export function filterCountriesByContinent(continent){
    return async function(dispatch){
        return dispatch({
            type:FILTER_BY_CONTINENT,
            payload:continent
        })
    }
}

export function sortCountriesByAlph(order){
    return async function(dispatch){
        return dispatch({
            type:SORT_COUNTRIES_BY_ALPH,
            payload:order
        })
    }
}

export function sortCountriesByPoblation(order){
    return async function (dispatch){
        return dispatch({
            type:SORT_COUNTRIES_BY_POBLATION,
            payload:order
        })
    }
}
export function getDetails(id){
    return async function(dispatch){
        console.log(id)
        const countryDetailByAxios=await axios.get(`http://localhost:3001/countries/${id}`)
        const countryDetail= await countryDetailByAxios.data
        console.log(countryDetail)
        return dispatch({
            type:GET_DETAILS,
            payload:countryDetail
        })
    }
}
export function cleanDetails(){
    return function(dispatch){
        return dispatch({
            type:CLEAN_DETAILS
        })
    }
}