const { Router } = require('express');
const routeAllCountries=require('./countriesRouter')
const routeActivity=require('./activitiesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/countries',routeAllCountries)
router.use('/activities',routeActivity)


module.exports = router;
