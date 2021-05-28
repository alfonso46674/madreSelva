if(process.env.NODE_ENV == 'development'){
    require('dotenv').config();

    module.exports = {
        port: 8080,
        url: 'https://localhost:8080'
    }

}else if(process.env.NODE_ENV == 'production'){
    module.exports = {
        port: 8080,
        url:'https://madreselva.ddns.net'
    }
}