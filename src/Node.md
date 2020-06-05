####1. HTTP module, url Module
```
    var http = require('http');
    var url = require('url');

    http.createServer(func(req, res){
        var query = url.parse(req.url, true);        

        res.writeHead();
        res.write();
        res.end();    
}).listen(8888)
```


####2. Supervisor
add a listener
`npm -g install supervisor`

run server in terminal: `supervisor app.js`
