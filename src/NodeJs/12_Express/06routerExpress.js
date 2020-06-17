var http = require('http');

http.createServer(function (req, res) {
    res.end("Hello Nodejs")
}).listen(8000)
