var http = require('http');
var url = require('url');
var fs = require('fs');
var router = require('./Router')
var ejs = require('ejs');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "rext/html; charset='utf-8'"});
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/login'){
        ejs.renderFile('./Views/login.ejs', {}, function (err, data) {
            res.end(data);
        })
    }
    else{
        res.end('index')
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');


