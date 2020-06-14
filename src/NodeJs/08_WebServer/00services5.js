var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var events = require('events');

var EventEmitter = new events.EventEmitter();
var mimeModel = require('./model/05_getminmefromfile_event');


http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;

    // default page
    if (pathName === '/'){
        pathName = '/index.html'
    }

    // Get file ext name
    var extname = path.extname(pathName)
    if(pathName !== '/favicon.ico') {     //filter favicon.ico

        fs.readFile('static/' + pathName, function (err, data) {
            if (err) {
                console.log("404 Not Found");
                fs.readFile('static/404.html', function (err, data404) {
                    res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
                    res.write(data404);
                    res.end();
                })
            } else {
                mimeModel.getMine(fs, EventEmitter, extname);

                EventEmitter.on('mime', function (mime) {
                    res.writeHead(200, {"Content-Type": "" + mime + ";charset=UTF-8"});
                    res.end(data);
                });
            }
        })
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

