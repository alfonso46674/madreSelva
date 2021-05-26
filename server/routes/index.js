const router = require('express').Router()

const publishRoute = require('./publish')
const filesRoute = require('./files')
const submissionsRoute = require('./submissions')

router.use('/api/publish',publishRoute)
router.use('/api/files',filesRoute)
router.use('/api/submissions',submissionsRoute)

//default get route
router.get('/api/test',(req,res)=>{
    res.send({'test':'Hello World'})
})

module.exports = router 