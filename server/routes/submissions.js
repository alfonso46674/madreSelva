const router = require('express').Router()

const fs = require('fs')
const path = require('path')

//return all submissions
router.get('/all',(req,res)=>{
    
    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

        res.status(200).send(dbJSON)
        
    } catch (error) {
        res.status(400).send({'Error':error})
    }
})


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
router.get('/search',(req,res)=>{

    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))
    
        let {author,title,category} = req.query
        let searchResult

        //if nothing was provided
        if(author === undefined && title === undefined && category === undefined){
            res.status(200).send([])
        }
        //search only by author
        else if(author !== undefined && title === undefined && category === undefined){
            searchResult = dbJSON.filter(submission => submission.author.includes(author))
        }
        //search only by title
        else if(author === undefined && title !== undefined && category === undefined){
            searchResult = dbJSON.filter(submission => submission.title.includes(title))
        }
        //search only by category
        else if(author === undefined && title === undefined && category !== undefined){
            searchResult = dbJSON.filter(submission => submission.category === category)
        }
        //search by author and title
        else if(author !== undefined && title !== undefined && category === undefined){
            searchResult = dbJSON.filter(submission => submission.author.includes(author) && submission.title.includes(title))
        }
        //search by title and category
        else if(author === undefined && title !== undefined && category !== undefined){
            searchResult = dbJSON.filter(submission => submission.title.includes(title) && submission.category === category)
        }
        //search by author and category
        else if(author !== undefined && title === undefined && category !== undefined){
            searchResult = dbJSON.filter(submission => submission.author.includes(author) && submission.category === category)
        }
        //search by author,title and category
        else if(author !== undefined && title !== undefined && category !== undefined){
            searchResult = dbJSON.filter(submission => submission.author.includes(author) && submission.title.includes(title) && submission.category === category)
        }

        res.status(200).send(searchResult)

    } catch (error) {
        res.status(400).send({'Error':error})
    }
})

//Edit submission status
router.put('/status',(req,res)=>{
    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))
        console.log(req.body);
        let {id,status} = req.body
        id = parseInt(id)
        //filter submissions and obtain a submission with the passed id
        let submissionIndex = dbJSON.findIndex(submission => submission.id === id)
        // console.log(submissionIndex);
        if(submissionIndex !== -1){

            //obtained submission by the query id
            let submission = dbJSON[submissionIndex]

            //if the status is rejected, delete the agreement file and document (if it exists)
            // if(status === 'Rejected'){
            //     //check if submission is a document, remove the document if it exists
            //     if(submission.type === 'Archivo'){
            //         fs.unlinkSync(path.normalize(submission.filePath))
            //     }
            //     //remove agreement
            //     fs.unlinkSync(path.normalize(submission.agreementPath))

            // }

            //update status of obtained submission
            submission.status = status

            //save the new version of the db by overwriting the old db.json
            fs.writeFileSync('server/DB/db.json',JSON.stringify(dbJSON))

            res.status(200).send({'Success':`Changed submission #${id} status to ${status}`})
            
        } else {
            res.status(400).send({'Error':`Error at finding submission with id ${id}`})
        }
    } catch (error) {
        res.status(501).send({'Internal Error':error})
    }

})

module.exports = router  