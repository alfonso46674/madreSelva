const router = require('express').Router()

const publishRoute = require('./publish')
const filesRoute = require('./files')
const submissionsRoute = require('./submissions')

router.use('/publish',publishRoute)
router.use('/files',filesRoute)
router.use('/submissions',submissionsRoute)

//default get route
router.get('/test',(req,res)=>{
    res.send({'test':'Hello World'})
})

module.exports = router 