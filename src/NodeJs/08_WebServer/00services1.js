var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var pathName = req.url;

    // default page
    if (pathName === '/'){
        pathName = '/index.html'
    }

    if(pathName !== '/favicon.ico'){    //filter favicon.ico
        console.log(pathName);

        fs.readFile('static/' + pathName, function (err, data) {
            if(err){console.log("404 Not Found");}
            else{
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.write(data);
                res.end()
            }
        })
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

