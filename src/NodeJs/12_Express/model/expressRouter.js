
var url = require('url');

var Server = function () {
    var G = this;

    var app = function (req, res) {
        var pathname = url.parse(req.url).pathname

        if(!pathname.endsWith('/')){pathname = pathname + '/'}

        // console.log('app' + req)
        if(G[pathname]){
            G[pathname](req, res)
        }else{
            res.end('Error Pathname')
        }
    }

    app.get = function (string, callback) {
        if(!string.endsWith('/')){string = string + '/'}
        if(!string.startsWith('/')){string = '/' + string}

        //login
        G[string] = callback;

    }

    return app;
}

// Exports Server
module.exports = Server();
