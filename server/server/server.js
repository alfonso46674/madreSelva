const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const https = require('https')

//import routes to use
const router = require('../routes')

const app = express()

const PORT = 8080
const HOST = '0.0.0.0'

const key = fs.readFileSync('server/keys/key.pem')
const certificate = fs.readFileSync('server/keys/cert.pem')
let options = {
    key: key,
    cert:certificate
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

//server static build of react project
// app.use(express.static(path.normalize('build')))

const {json, urlencoded} = express

//basic parse configuration
app.use(json());
app.use(urlencoded({extended: false}));
// const corsOptions = {origin: '*',optionSuccessStatus:200}
// app.use(cors(corsOptions))



//send request to router
app.use(router)

//start https server
let server = https.createServer(options,app)

server.listen(PORT,()=>{console.log(`Server on port: ${PORT} and host ${HOST}`)})

// app.listen(PORT,HOST,()=>{console.log(`Server on port: ${PORT} and host ${HOST}`)});