const router = require('express').Router()

const multer = require('multer')
const path = require('path')
const fs = require('fs')

//multer configuration
    let time = new Date()
    let timestamp = time.toISOString().replace(':','-').replace(':','-')
    //storage configuration
    const storage = multer.diskStorage({
        destination: path.join(__dirname,'../files'),
        filename: (req,file,cb)=>{
            // cb(null, file.originalname+ new Date().toISOString() +path.extname(file.originalname))
            cb(null,timestamp+file.originalname)
        }
    })

    //file filter that only accepts pdfs
    const fileFilter = (req,file,cb)=>{
        if(file.mimetype === 'application/pdf'){
            //Verify that file has not been already uploaded, if so then dont store anything
            if(verifyIfFileExists('server/files',timestamp + file.originalname)) cb(null,false)
            else cb(null,true)
        }else{
            cb(null,false) // ignore other files
        }
    }

    //create instance of multer
    const uploadFile = multer({
        storage:storage,
        // limits: {fileSize:1000000},
        fileFilter:fileFilter
    })

    //saves a file and agreementLetter in /files with the aid of multer, and save its related information in the DB
    router.post('/pdf',uploadFile.fields([{
        name:'document',maxCount:1
        },{
        name: 'agreement', maxCount:1
        }]),(req,res)=>{
            //return error if either the agreement or pdf files were not uploaded
        // console.log(req.files);
        if (req.files === undefined || Object.entries(req.files).length === 0) res.status(400).send({'Error':'No files provided, invalid file format or files have already been uploaded'})
        //if only the document was provided, then delete it and return error
        else if(Object.entries(req.files).length === 1 && req.files.document !== undefined) {
            //delete the provided file, either document or agreement
            fs.unlinkSync(req.files.document[0].path)
            res.status(400).send({'Error':'Missing agreement letter or invalid format'})
        }
        //if only the agreement was provided, then delete it and return error
        else if(Object.entries(req.files).length === 1 && req.files.agreement !== undefined) {
            //delete the provided file, either document or agreement
            fs.unlinkSync(req.files.agreement[0].path)
            res.status(400).send({'Error':'Missing pdf document or invalid format'})
        }
    
        else {
            
            // console.log(req.file);
            //verify body contents
            let {abstract,author,title,category,date} = req.body
            if(abstract !== undefined && author !== undefined && title !== undefined && category !== undefined && date !== undefined){
                
                //Save in the DB the parameters, along with the file path for future access

                //read the db.json and parse it to a js object
                let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

                //create the new data to store in the db.json
                let data = {
                    id:dbJSON.length == 0 ? 1 : Math.max.apply(Math,dbJSON.map(function(o){return o.id;})) + 1,
                    author : author,
                    title: title,
                    abstract: abstract,
                    category: category,
                    date:date,
                    filePath: req.files.document[0].path,
                    agreementPath: req.files.agreement[0].path,
                    status: 'pending',
                    videoLink: null,
                    type:"Archivo"
                }

                //append the data to the db.json
                dbJSON.push(data)
                //save the new version of the db by overwriting the old db.json
                fs.writeFileSync('server/DB/db.json',JSON.stringify(dbJSON))
                
                res.status(200).send({'Success':'Document uploaded'})
            }
            //return error if one parameter is not provided
            else{
                //remove the files if there are missing parameters
                fs.unlinkSync(req.files.document[0].path)
                fs.unlinkSync(req.files.agreement[0].path)
                res.status(400).send({'Error':'Missing parameters -abstract,author,title or category-'})
            }
        }
    })

    //only saves information regarding the video in the DB
    router.post('/videoLink',uploadFile.single('agreement'),(req,res)=>{

        // console.log(req.file);
        if(req.file === undefined) res.status(400).send({'Error':'No agreement letter was provided, invalid file format or file has already been uploaded'})
        else {

            //verify body contents
            let {abstract,author,title,category,videoLink,date} = req.body
            if(abstract !== undefined && author !== undefined && title !== undefined && category !== undefined && videoLink !== undefined && date !== undefined){
                
                //Save in the DB the parameters, along with the agreement file path for future access

                //read the db.json and parse it to a js object
                let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

                //create the new data to store in the db.json
                let data = {
                    id:dbJSON.length == 0 ? 1 : Math.max.apply(Math,dbJSON.map(function(o){return o.id;})) + 1,
                    author : author,
                    title: title,
                    abstract: abstract,
                    category: category,
                    date: date,
                    filePath: null,
                    agreementPath: req.file.path,
                    status: 'pending',
                    videoLink: videoLink,
                    type:'Video'
                }

                //append the data to the db.json
                dbJSON.push(data)
                //save the new version of the db by overwriting the old db.json
                fs.writeFileSync('server/DB/db.json',JSON.stringify(dbJSON))
                
                res.status(200).send({'Success':'Document uploaded'})
            }
             //return error if one parameter is not provided
             else{
                //remove the file if there are missing parameters
                fs.unlinkSync(req.file.path)
                res.status(400).send({'Error':'Missing parameters -abstract,author,title or category-'})
            }
        }
    })

    //verifies if a file exists in a given directory
    function verifyIfFileExists(dir,fileToVerify){
        
        const files = fs.readdirSync(dir)
        for(const file of files){
            if(file === fileToVerify) return true
        }
        return false
    }

module.exports = router