const express = require('express')
const app = express()
const userData = require('./user.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Metro Events Users")
})

app.get('/user', (req, res) => {
    res.send(userData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})