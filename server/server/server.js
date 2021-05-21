const express = require('express')
const path = require('path')

//import routes to use
const router = require('../routes')

const app = express()

const PORT = 3000
const HOST = '0.0.0.0'

//server static build of react project
app.use(express.static(path.normalize('build')))

const {json, urlencoded} = express

//basic parse configuration
app.use(json());
app.use(urlencoded({extended: false}));



//send request to router
app.use(router)

app.listen(PORT,HOST,()=>{console.log(`Server on port: ${PORT} and host ${HOST}`)});