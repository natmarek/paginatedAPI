const express = require('express')
const app = express()

const users = [
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
    {id:1, name: 'User 1'},
]


app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000)
