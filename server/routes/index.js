const router = require('express').Router()

const publishRoute = require('./publish')
const filesRoute = require('./files')

router.use('/publish',publishRoute)
router.use('/files',filesRoute)

//default get route
router.get('/test',(req,res)=>{
    res.send({'test':'Hello World'})
})

module.exports = router 