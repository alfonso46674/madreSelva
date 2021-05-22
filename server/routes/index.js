const router = require('express').Router()

const uploadsRoute = require('./uploads')
const filesRoute = require('./files')

router.use('/uploads',uploadsRoute)
router.use('/files',filesRoute)

//default get route
router.get('/',(req,res)=>{
    res.send({'test':'Hello World'})
})

module.exports = router 