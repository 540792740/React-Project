var http = require('http');
var app = require('./model/expressRouter')
var ejs = require('ejs');

http.createServer(app).listen(8000)

app.get('/', function (req, res) {
    var msg = "Data from Database";

    ejs.renderFile('./Views/index.ejs', {msg:msg}, function (err, data) {
        res.send(data);
    })
})

app.get('/login', function (req, res) {
    console.log('login');
    ejs.renderFile('./Views/form.ejs', {}, function (err, data) {
        res.send(data);
    })
    res.end('login');
})


app.post('/dologin', function (req, res) {
    console.log(req.body);
    res.send("<script>alert('Successful'); history.back()</script>>");
})


app.get('/register', function (req, res) {
    console.log('register');
    res.send('register');
})

app.get('/news', function (req, res) {
    console.log('news');
    res.send('news');
})
