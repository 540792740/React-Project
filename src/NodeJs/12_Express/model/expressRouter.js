
var url = require('url');

//Encapsulation, res.send()
function changeRes(res) {
    res.send = function (data) {
        res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
        res.end(data);
    }
}


var Server = function () {

    //Global variable, deal with request
    var G = this;
    this.get =  {};
    this.post = {};

    var app = function (req, res) {

        changeRes(res);
        // Get router pathname
        var pathname = url.parse(req.url).pathname
        if(!pathname.endsWith('/')){pathname = pathname + '/'}

        //Get or Post
        var method = req.method.toLowerCase();
        if(G[method][pathname]){
            if(method === 'post'){
                var postStr = '';
                req.on('data', function (chunk) {
                    postStr += chunk;
                })
                req.on('end',function (err, chunk) {
                    req.body = postStr; // Get post data

                    G[method][pathname](req, res);

                })
            }

            //Get run directly
            else{G[method][pathname](req, res);}
        }
        else{res.end('Error Pathname')}

    }

    app.get = function (string, callback) {
        if(!string.endsWith('/')){string = string + '/'}
        if(!string.startsWith('/')){string = '/' + string}

        //login
        G.get[string] = callback;
    }
    app.post = function (string, callback) {
        if(!string.endsWith('/')){string = string + '/'}
        if(!string.startsWith('/')){string = '/' + string}

        //login
        G.post[string] = callback;
    }

    return app;
}

// Exports Server
module.exports = Server();
