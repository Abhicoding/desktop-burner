var http = require('http')
var app = require('./server')

var port = process.env.PORT || 4000

var server = http.createServer(app)

server.listen(port, () => console.log(`App listening on port ${port}`))