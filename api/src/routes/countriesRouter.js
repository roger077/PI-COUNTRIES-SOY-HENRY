const { Router } = require('express');
const {getAllCountries,getCountriesById}=require('./controllers/countriesController')
const router= Router()

router.get('/',getAllCountries)
router.get('/:id',getCountriesById)
module.exports=router;