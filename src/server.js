const express = require('express')

const rota = require('./routes')

const server = express()

server.use(rota)
// server.set(port, process.env.PORT || 3000)

server.listen(3000, ()=>{
    console.log('Server run na porta ' + 3000)
})