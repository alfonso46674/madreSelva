const router = require('express').Router()

const globby = require('globby')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

//multer configuration
    //storage configuration
    const storage = multer.diskStorage({
        destination: path.join(__dirname,'../public'),
        filename: (req,file,cb)=>{
            // cb(null, file.originalname+ new Date().toISOString() +path.extname(file.originalname))
            cb(null,file.originalname)
        }
    })

    //file filter that only accepts pdfs
    const fileFilter = (req,file,cb)=>{
        if(file.mimetype === 'application/pdf'){
            cb(null,true)
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

    //saves a file in /public with the aid of multer, and save its related information in the DB
    router.post('/pdfUpload',uploadFile.single('document'),(req,res)=>{

        //return error if there is no pdf file
        if(req.file == undefined) res.status(400).send({'Error':'No file provided or invalid file format'})
        else {

            // console.log(req.file);
            //verify body contents
            let {abstract,creatorName,documentName,category} = req.body
            if(abstract != undefined && creatorName != undefined && documentName != undefined && category != undefined){
                
                //Save in the DB the parameters, along with the file path for future access

                
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
    router.post('/videoUpload',uploadFile.single('document'),(req,res)=>{

        console.log(req.file);
        console.log(req.body);
        res.status(200).send('Document uploaded')
    })

//shows all of the stored files in /public
router.get('/show', async (req,res)=>{
    const files = await globby(['**/public/*'])
    // console.log(files);
    const filesRenamed = files.map(function(x){
        return x.replace("public/",'')
    })
    res.send(filesRenamed)
})

//downloads a file given the input req.body.filename
router.post('/download', (req,res)=>{
    //obtain the path of the filename
    let filePath = path.join(__dirname,`../public/${req.body.filename}`)
    //if the provided filename exists in /public
    if(fs.statSync(filePath).isFile()){
        res.download(filePath)
    }
})

module.exports = router