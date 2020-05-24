const express = require('express')
const app = express()

const users = [
    {id:1, name: 'User 1'},
    {id:2, name: 'User 2'},
    {id:3, name: 'User 3'},
    {id:4, name: 'User 4'},
    {id:5, name: 'User 5'},
    {id:6, name: 'User 6'},
    {id:7, name: 'User 7'},
    {id:8, name: 'User 8'},
    {id:9, name: 'User 9'},
    {id:10, name: 'User 10'},
    {id:11, name: 'User 11'},
    {id:12, name: 'User 12'},
]


app.get('/users', (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex =(page -1) * limit
    const endIndex = page * limit

    const results = {}

    results.next = {
        page: page+1,
        limit: limit
    }
    results.previous = {
        page: page-1,
        limit: limit
    }

    results.results= users.slice(startIndex,endIndex)
    res.json(results)
})

app.listen(3000)
