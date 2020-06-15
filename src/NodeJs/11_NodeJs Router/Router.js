var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var events = require('events');
var EventEmitter = new events.EventEmitter();

var model = require('./model/model');


http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});

    var pathname = url.parse(req.url).pathname.replace('/', '');

    if(pathname !== 'favicon.ico'){
        try{
            model[pathname](req,res);
        }
        catch (err) {
            model['home'](req,res);
        }
    }

}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');
