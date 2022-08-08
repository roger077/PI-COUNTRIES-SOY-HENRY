const axios =require('axios');
const {Country,Activity}=require('../../db')
async function getAllCountries(req,res){
    
    try{
        const{name}=req.query
        
        const allCountries=await Country.findAll({
            attributes:['name','flag','continent','id','poblation'],
            include:{
                model:Activity,
                attributes:['name','difficulty','duration','season']
                
            }
        })
        if(!name){
            allCountries.length?res.status(200).send(allCountries):res.status(404).send('Countries not found')
            
        }
        else{
            const countriesByName=allCountries.filter(c=>c.name.toLowerCase().includes(name.toLowerCase()))
            countriesByName.length?res.status(200).send(countriesByName):res.status(404).send('Country not found')
            
        }

    }catch(e){
        res.status(404).send(`Error in '/countries':\n ${e}`)
    }
}
async function getCountriesById(req,res){
    try{
        const {id}=req.params
        const foundCountry=await Country.findByPk(
            id,
            {
                include:{
                    model:Activity,
                    attributes:['name','difficulty','duration','season']
                                    
                }
            }
        )
        foundCountry?res.status(200).send({
            id:foundCountry.id,
            name:foundCountry.name,
            flag:foundCountry.flag,
            continent:foundCountry.continent,
            capital:foundCountry.capital,
            subregion:foundCountry.subregion,
            area:foundCountry.area,
            poblation:foundCountry.poblation,
            activities:foundCountry.activities
        }):res.status(404).send('Country by id not found')
    }catch(e){
        res.status(500).send(`Error in '/countries/:id':\n ${e}`)
    }
}

module.exports={getAllCountries,getCountriesById}
