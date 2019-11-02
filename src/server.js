const express = require('express')

const rota = require('./routes')

const server = express()

server.use(rota)
const port = process.env.PORT || 5555

server.listen(port, ()=>{
 
console.log('Server run na porta ' + port)
})