const { Router } = require('express');
const {postActivity}=require('./controllers/activitiesController')
const router= Router()

router.post('/',postActivity)

module.exports=router;