var http = require('http');
var url = require('url');
var fs = require('fs');
var router = require('./Router')

http.createServer(function (req, res) {
    router.statics(req, res, 'static')

    var pathname = url.parse(req.url).pathname;
    if(pathname === '/login'){
        res.end('login');
    }else if(pathname === '/register'){res.end('order')}
    else{
        res.end('index')
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');


