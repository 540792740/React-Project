var http = require('http')
var url = require('url')

// Initial G
var G = {}


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
    console.log('login');
    res.end('login')
})
app.get('register', function (req, res) {
    console.log('register')
    res.end('register')

})


