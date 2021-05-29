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
router.post('/search',(req,res)=>{

    try {
        //read db.json
        let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))
    
        let {author,title,category} = req.body
        let searchResult

        // //if nothing was provided
        if(author === undefined && title === undefined && category === undefined){
            res.status(200).send([])
        }

        //if something was undefined, which should not happen
        else if(author === undefined || title === undefined || category === undefined){
            res.status(400).send({'Error':'A search element was undefined'})
        }

        // //search only by author
        else if(author !== '' && title === '' && (category === '' || category.toLowerCase() === 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.author.toLowerCase().includes(author.toLowerCase()) && submission.status === 'accepted')
        }
        // //search only by title
        else if(author === '' && title !== '' && (category === '' || category.toLowerCase() === 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.title.toLowerCase().includes(title.toLowerCase()) && submission.status === 'accepted')
        }
        // //search only by category
        else if(author === '' && title === '' && (category !== '' && category.toLowerCase() !== 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.category.toLowerCase() === category.toLowerCase() && submission.status === 'accepted')
        }
        // //search by author and title
        else if(author !== '' && title !== '' && (category === '' || category.toLowerCase() === 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.author.toLowerCase().includes(author.toLowerCase()) && submission.title.toLowerCase().includes(title.toLowerCase()) && submission.status === 'accepted')
        }
        // //search by title and category
        else if(author === '' && title !== '' && (category !== '' && category.toLowerCase() !== 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.title.toLowerCase().includes(title.toLowerCase()) && submission.category.toLowerCase() === category.toLowerCase() && submission.status === 'accepted')
        }
        // //search by author and category
        else if(author !== '' && title === '' && (category !== '' && category.toLowerCase() !== 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.author.toLowerCase().includes(author.toLowerCase()) && submission.category.toLowerCase() === category.toLowerCase() && submission.status === 'accepted')
        }
        // //search by author,title and category
        else if(author !== '' && title !== '' && (category !== '' && category.toLowerCase() !== 'ninguna')){
            searchResult = dbJSON.filter(submission => submission.author.toLowerCase().includes(author.toLowerCase()) && submission.title.toLowerCase().includes(title.toLowerCase()) && submission.category.toLowerCase() === category.toLowerCase() && submission.status === 'accepted')
        }

        //if the search params are left in blank to return to original list with accepted submissions
        else if(author === '' && title === '' && (category === '' || category.toLowerCase() === 'ninguna')){
            searchResult = dbJSON.filter(submission =>  submission.status === 'accepted')
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
        // console.log(req.body);
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
            submission.status = status.toLowerCase()

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