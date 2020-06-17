var http = require('http')
var url = require('url')；


// Initial G
var G = {}


var app = function (req, res) {
    var pathname = url.parse(req.url).pathname

    // console.log('app' + req)
    if(G['login']){
        G['login'](req, res)
    }
}


app.get = function (string, callback) {
    if(!string.endsWith('/')){string = string + '/'}
    if(!string.startsWith('/')){string = '/' + string}

    G[string] = callback;
    console.log('app.get')
}
app.post = function () {
    console.log('app.post')
}

app.get('login', function (req, res) {
    console.log('login')
})

// Create server
http.createServer(app).listen(3000);
app.get('login', function (req, res) {
    console.log('login')
})
app.get('register', function (req, res) {
    console.log('register')
})


