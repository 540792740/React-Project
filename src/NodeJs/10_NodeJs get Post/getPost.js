var http = require('http');
var url = require('url');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});

    var method = req.method.toLowerCase();

    var pathname = url.parse(req.url,true).pathname;
    if(pathname === '/login'){
        ejs.renderFile('./Views/form.ejs', {
        }, function (err, data) {
            res.end(data);
        })
    }else if(pathname === '/dologin' && method === 'get'){

        //Get fetch data
        // console.log(url.parse(req.url, true).query)

        res.end('dologin')

    }else if(pathname === '/dologin' && method === 'post'){

        var postStr = '';
        req.on('data', function (chunk) {
            postStr += chunk;
        })
        req.on('end', function (err, chunk) {
            console.log(postStr);

            fs.appendFile('login.txt', postStr + '\n', function (err) {
                if(err){
                    console.log(err);
                    return
                }
                console.log("successful write")
            })

            res.end("<script>alert('Sucessful'); history.back()</script>>")
        })

        // res.end('dologin')
    }

    else{
        ejs.renderFile('./Views/index.ejs', {
        }, function (err, data) {
            res.end(data);
        })
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');


