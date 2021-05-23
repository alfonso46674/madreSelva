const router = require('express').Router()

const multer = require('multer')
const path = require('path')
const fs = require('fs')

//multer configuration
    //storage configuration
    const storage = multer.diskStorage({
        destination: path.join(__dirname,'../files'),
        filename: (req,file,cb)=>{
            // cb(null, file.originalname+ new Date().toISOString() +path.extname(file.originalname))
            cb(null,file.originalname)
        }
    })

    //file filter that only accepts pdfs
    const fileFilter = (req,file,cb)=>{
        if(file.mimetype === 'application/pdf'){

            //Verify that file has not been already uploaded, if so then dont store anything
            if(verifyIfFileExists('server/files',file.originalname)) cb(null,false)
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
        console.log(req.files);
        if (req.files === undefined || Object.entries(req.files).length === 0) res.status(400).send({'Error':'No files provided, invalid file format or files have already been uploaded'})
        else if(req.files.document[0] === undefined ) res.status(400).send({'Error':'No pdf document was provided, invalid file format or file has already been uploaded'})
        else if(req.files.agreement[0] === undefined) res.status(400).send({'Error':'No agreement letter was provided, invalid file format or file has already been uploaded'})
    
        else {
            
            // console.log(req.file);
            //verify body contents
            let {abstract,creatorName,documentName,category} = req.body
            if(abstract !== undefined && creatorName !== undefined && documentName !== undefined && category !== undefined){
                
                //Save in the DB the parameters, along with the file path for future access

                //read the db.json and parse it to a js object
                let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

                //create the new data to store in the db.json
                let data = {
                    creatorName : creatorName,
                    documentName: documentName,
                    abstract: abstract,
                    category: category,
                    filePath: req.files.document[0].path,
                    agreement: req.files.agreement[0].path,
                    status: 'pending',
                    videoLink: null
                }

                //append the data to the db.json
                dbJSON.push(data)
                //save the new version of the db by overwriting the old db.json
                fs.writeFileSync('server/DB/db.json',JSON.stringify(dbJSON))
                
                res.status(200).send('Document uploaded')
            }
            //return error if one parameter is not provided
            else{
                //remove the file if there are missing parameters
                fs.unlinkSync(req.file.path)
                res.status(400).send({'Error':'Missing parameters -abstract,creatorName,documentName or category-'})
            }
        }
    })

    //only saves information regarding the video in the DB
    router.post('/videoLink',(req,res)=>{

        console.log(req.file);
        console.log(req.body);
        res.status(200).send('Document uploaded')
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