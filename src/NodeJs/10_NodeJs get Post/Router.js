var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var events = require('events');
var EventEmitter = new events.EventEmitter();

//Get content private
function getMine(EventEmitter, extname) {
    fs.readFile('../mime.json', function (err, data) {
        if(err){
            console.log("mime.json does not exist")
            return false;
        }
        var Mime = JSON.parse(data.toString())


        var result = Mime[extname] || 'text/html';

        EventEmitter.emit('mime', result)
    })
}


exports.statics = function (req,res, staticPath) {

    // Get URL value
    var pathName = url.parse(req.url).pathname;

    // default page
    if (pathName === '/'){
        pathName = '/index.html'
    }

    // Get file ext name
    var extname = path.extname(pathName)
    if(pathName !== '/favicon.ico') {     //filter favicon.ico

        fs.readFile(staticPath + '/' + pathName, function (err, data) {
            if (err) {
                console.log("404 Not Found");
                fs.readFile(staticPath + '/404.html', function (err, data404) {
                    res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
                    res.end(data404);
                })
            } else {
                getMine(EventEmitter, extname);

                EventEmitter.on('mime', function (mime) {
                    res.writeHead(200, {"Content-Type": "" + mime + ";charset=UTF-8"});
                    res.end(data);
                });
            }
        })
    }
}
