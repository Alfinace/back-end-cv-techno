const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/routing')
const app = express()
const db = require('./db/models/index')
const path = require('path')
app.use(bodyParser.json())
app.get('/',(req,res) => {
    return res.sendFile(__dirname + '/public/index.html')
})
app.use('/api',router)
const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server in listen on ${PORT}`))