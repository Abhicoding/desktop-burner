var express = require('express')
var app = express()


var params = require('./secret/secret')
app.get('/api/outgoing/call', (req, res) => {
    console.log('it worked!!', params)
    res.sendStatus(200)
})



module.exports = app