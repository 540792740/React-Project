var http = require('http');
var url = require('url');
var fs = require('fs');
var router = require('./Router')
var ejs = require('ejs');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/login'){
        var data = 'Backend Data'
        ejs.renderFile('./Views/login.ejs', {
        msg:data,
        list:['111','222']
        }, function (err, data) {
            res.end(data);
        })
    }
    else{
        var data = 'Register Data';
        var h = "<h2>This is a h2 tag</h2>"
        ejs.renderFile('./Views/register.ejs', {
            msg:data,
            list:['111','222'],
            h:h
        }, function (err, data) {
            res.end(data);
        })
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');


