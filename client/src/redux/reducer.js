import {GET_ALL_COUNTRIES,SEARCH_COUNTRY,FILTER_COUNTRIES_BY_ACTIVITY,POST_ACTIVITY,FILTER_BY_CONTINENT,SORT_COUNTRIES_BY_ALPH,SORT_COUNTRIES_BY_POBLATION,GET_DETAILS,CLEAN_DETAILS} from './actions/types'
const initialState={
    countries:[],
    allCountries:[],
    activities:[],
    continents:['Antarctica','South America','Asia','Africa','Europe','North America','Oceania'],
    details:[]
};
export default function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_ALL_COUNTRIES:{
            return{
                ...state,
                countries:action.payload,
                allCountries:action.payload
            }
        }
        case SEARCH_COUNTRY:{
            return{
                ...state,
                countries:action.payload
            }
        }
        case FILTER_COUNTRIES_BY_ACTIVITY:{
            return{
                ...state,
                countries:action.payload==='All'?state.countries:state.allCountries.filter(c=>c.activities.find(a=>a.name===action.payload))
                
            }           
        }
        case POST_ACTIVITY:{
            return{
                ...state,
                activities:[...state.activities,action.payload]
            }
        }
        case FILTER_BY_CONTINENT:{
            return{
                ...state,
                countries:action.payload==='All'?state.countries:state.allCountries.filter(c=>c.continent===action.payload)
            }
        }
        case SORT_COUNTRIES_BY_ALPH:{
            const sortOrder=action.payload==='AS'?state.countries.sort((a,b)=>{
                if(a.name>b.name) return 1
                if(a.name<b.name) return -1
                return 0
            }):state.countries.sort((a,b)=>{
                if(a.name>b.name) return -1
                if(a.name<b.name) return 1
                else return 0
            })
            return{
                ...state,
                countries:sortOrder
            }
        }
        case SORT_COUNTRIES_BY_POBLATION:{
            const sortOrder=action.payload==='AS'?state.countries.sort((a,b)=>{
                if(a.poblation>b.poblation) return -1
                if(a.poblation<b.poblation) return 1
                return 0
            }):state.countries.sort((a,b)=>{
                if(a.poblation>b.poblation) return 1
                if(a.poblation<b.poblation) return -1
                else return 0
            })
            return{
                ...state,
                countries:sortOrder
            }
        }
        case GET_DETAILS:{
            return{
                ...state,
                details:[action.payload]
            }
        }
        case CLEAN_DETAILS:{
            return{
                ...state,
                details:[]
            }
        }
        default: return state;
    }
}