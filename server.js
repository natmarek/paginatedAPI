const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./users')

mongoose.connect('mongodb://localhost/pagination', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', async () => {
    if await (User.countDocuments().exec() > 0)
})

app.get('/users', paginatedResults(User),(req, res) => {
    res.json(res.paginatedResults)
})

function paginatedResults(model) {
    return(req, res, next)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex =(page -1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < model.length) {
       results.next = {
        page: page+1,
        limit: limit
    } 
    }
    

    if (startIndex > 0) {
    results.previous = {
        page: page-1,
        limit: limit
        }
    }

    results.results= model.slice(startIndex,endIndex)

    res.paginatedResults = results
    next()
    }
}

app.listen(3000)
