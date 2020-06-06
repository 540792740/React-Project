var http = require('http');
var url = require('url');
http.createServer(function (req, res) {

    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write("test  <br>")
    res.end("哈哈哈哈，我买了一个iPhone" + (1+2+3) + "s");
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

