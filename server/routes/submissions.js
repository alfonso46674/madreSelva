const router = require('express').Router()

const fs = require('fs')

//return accepted submissions
router.get('/accepted',(req,res)=>{
    
    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

        let accepted = dbJSON.filter(submission => submission.status === 'accepted')
        res.status(200).send(accepted)
        
    } catch (error) {
        res.status(400).send({'Error':error})
    }
})

//return pending submissions
router.get('/pending',(req,res)=>{
    
    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

        let pending = dbJSON.filter(submission => submission.status === 'pending')
        res.status(200).send(pending)
        
    } catch (error) {
        res.status(400).send({'Error':error})
    }
})


//return rejected submissions
router.get('/rejected',(req,res)=>{
    
    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

        let rejected = dbJSON.filter(submission => submission.status === 'rejected')
        res.status(200).send(rejected)
        
    } catch (error) {
        res.status(400).send({'Error':error})
    }
})


//return all submissions that meet certain conditions

//Edit submission status

module.exports = router  