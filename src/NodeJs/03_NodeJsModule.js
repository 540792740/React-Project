var http = require('http');
var config = require('./03_config');
var foo = require('foo');
var bar = require('bar');

console.log(foo);

//bar not exist -> node_module
//not exist -> bar -> not exist then bar.package.json  -> main
console.log(bar.str);

var app = http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write("Node JS, hello <br>");
    console.log(config.tools.str)
    console.log("1 + 2 = " + config.tools.add(1, 2))

    res.end();
});
app.listen(8002, '127.0.0.1');


