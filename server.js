var express = require('express')
var app = express()
var bodyparser = require('body-parser')
require('body-parser-xml')(bodyparser)

var parser = require('xml2json')

var request = require('superagent')

var auth = require('./secret/secret')
var param = require('./params/param')

app.use(bodyparser.xml())

app.get('/api/outgoing/call', (req, res) => {
  var query = {From, CallerId, Url} = param
  request.post('https://api.exotel.com/v1/Accounts/exotel301/Calls/connect')
    .auth(auth.account_sid, auth.account_token)
    .query(query)
    .then (r => {
      console.log('LOGGING ARRR', parser.toJson(r.body.toString()))
      res.sendStatus(200)
    })
})

app.get('/api/outgoing/message', (req, res) => {
  console.log('it worked!!', auth)
  res.sendStatus(200)
})


module.exports = app