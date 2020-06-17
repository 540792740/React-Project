var http = require('http');
var app = require('./model/expressRouter')

http.createServer(app).listen(8000)

app.get('/login', function (req, res) {
    console.log('login');
    res.end('login');
})

console.log()
