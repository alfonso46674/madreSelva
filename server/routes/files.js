const router = require('express').Router()

const globby = require('globby')
const path = require('path')
const fs = require('fs')


//shows all of the stored files in /files
router.get('/show', async (req,res)=>{
    const files = await globby(['**server/files/*'])
    // console.log(files);
    const filesRenamed = files.map(function(x){
        return x.replace("server/files/",'')
    })
    res.send(filesRenamed)
})

//downloads a file given the input req.body.filename
router.get('/download', (req,res)=>{

    let {id} = req.query
    id = parseInt(id)

    try {
         //read db.json
         let dbJSON = JSON.parse(fs.readFileSync('server/DB/db.json'))

         //filter db by submission id and check that its a file
         let submissionToFind = dbJSON.filter(submission => submission.id === id && submission.type === 'Archivo')
        
         //the last segment of the submission filePath will always be the file name
         let fileName = path.basename(path.normalize(submissionToFind[0].filePath))

         let relativeFilePath = path.join(__dirname, `../files/${fileName}`)
         if(fs.statSync(relativeFilePath).isFile()){
            //  res.status(200).download(relativeFilePath)
             res.status(200).download(relativeFilePath)
            }
            else res.status.send({'Error':`No file with name: ${fileName} in DB`})


        
    } catch (error) {
        res.status(501).send({'Internal Error':error})
    }
})

//downloads the agreement letter
router.get('/agreement',(req,res)=>{
    let filePath = path.join(__dirname,'../staticFiles/CartaUsoDeContenidos.docx')

    if(fs.statSync(filePath).isFile()){
        res.status(200).download(filePath)
    }
    else res.status(400).send({'Error':'No agreement letter was found'})
})

module.exports = router