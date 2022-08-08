const {Country}=require('../../../db')
const axios =require('axios');

function getCountries(country){
    return{
        id:country.cca3,
        name:country.name.common,
        flag:country.flags[1],
        continent:country.continents[0],
        capital:country.capital?country.capital[0]:'Capital not found',
        subregion:country.subregion?country.subregion:'Subregion not found',
        area:country.area,
        poblation:country.population
    }
}

async function getCountriesApi(){
    const apiCountries = await axios.get('https://restcountries.com/v3/all')
    const allCountries = await apiCountries.data
    const countries= allCountries.map(c=>getCountries(c))
    await Country.bulkCreate(countries).then(()=>console.log('Database loaded'))
}

module.exports={getCountriesApi,getCountries}
