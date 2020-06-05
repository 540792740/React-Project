var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    console.log(request.url)
    if(request.url !== '/favicon.ico'){

        // parseQueryString, make result become a object
        var result = url.parse(request.url, true);
        console.log(result.query.aid)

    }
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write("test once <br>")
    response.write("test  <br>")
    response.write("New Test  <br>")
    response.end("哈哈哈哈，我买了一个iPhone" + (1+2+3) + "s");
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

