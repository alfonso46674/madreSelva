const router = require('express').Router()

const documentsRoute = require('./documents')


router.use('/documents',documentsRoute)

//default get route
router.get('/',(req,res)=>{
    res.send({'test':'Hello World'})
})

module.exports = router 