var express = require('express')
var app = express()
var bodyparser = require('body-parser')
require('body-parser-xml')(bodyparser)

var parser = require('xml2json')

var request = require('superagent')

var auth = require('./secret/secret')
var param = require('./params/param')

app.use(bodyparser.xml())
app.use(bodyparser.json())

var blocked = ['08879367443']

app.get('/api/outgoing/call', (req, res) => {
  var {From, CallerId} = param
  var query = {}
  query.To = req.query.To
  query.From = From
  query.CallerId = CallerId
  console.log(query)
  request.post(`https://api.exotel.com/v1/Accounts/${auth.account_sid}/Calls/connect`)
    .auth(auth.account_sid, auth.account_token)
    .query(query)
    .then (r => {
      console.log('LOGGING ARRR', parser.toJson(r.body.toString()))
      res.sendStatus(200)
    })
})

app.post('/api/outgoing/sms', (req, res) => {
  var query = {From: param.CallerId}
  var message = param.template
  message =  message.replace('%s', req.body.Message)
  message =  message.replace('%d', param.From)
  query.Body = message
  query.To = req.body.To
  request.post(`https://api.exotel.com/v1/Accounts/${auth.account_sid}/Sms/send`)
    .auth(auth.account_sid, auth.account_token)
    .query(query)
    .then (r => {
      console.log('LOGGING ARRR', parser.toJson(r.body.toString()))
       res.sendStatus(200)
    })
})

app.get('/api/block', (req, res) => {
  console.log(req.query)
  blocked.push (req.query.block)
  res.sendStatus(200)
})

app.get('/api/checkblock', (req, res) => {

  console.log(req.query)
  if (blocked.includes(req.query.CallFrom)) return res.sendStatus(302)
  res.sendStatus(200)
})


module.exports = app