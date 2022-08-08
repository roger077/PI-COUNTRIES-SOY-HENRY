const {Activity,Country}=require('../../db')

async function postActivity(req,res){
    try{
        const{name,difficulty,season,duration,countries}=req.body;

        const foundCountries=await Country.findAll({
            where:{
                name:countries
            }
        })
        const foundActivity=await Activity.create({name,difficulty,season,duration})    
        foundActivity.addCountry(foundCountries)
        res.status(200).send("Loaded successfully!")
    }catch(e){
        res.status(500).send(e)
    }

   
}

module.exports={postActivity}