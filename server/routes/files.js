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
router.post('/download', (req,res)=>{
    //obtain the path of the filename
    let filePath = path.join(__dirname,`../files/${req.body.filename}`)
    //if the provided filename exists in /files
    if(fs.statSync(filePath).isFile()){
        res.download(filePath)
    }
})

module.exports = router