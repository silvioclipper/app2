const express = require('express')

const routes = express.Router()

routes.get('/', (req, res)=>{
    res.send({status: true})
})

routes.get('/users', (req, res)=>{
    res.send({control:'new'})
})

module.exports = routes