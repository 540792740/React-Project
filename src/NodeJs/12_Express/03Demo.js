var route = require('./model/httpRoute')
var app = route();
var http = require('http');
var server = http.createServer(app);

app.get('/', function (req, res) {
    res.send('Home')
});
app.get('/login', function (req, res) {

    res.send('login');
});

app.get('/register', function (req, res) {

    res.send('register');

});

app.post('/test', function (req, res) {
    console.log('POST', req.query);
    res.send(req.query);
});
server.listen(8080, function () {
    console.log('Listen : ' + server.address().port)
})
