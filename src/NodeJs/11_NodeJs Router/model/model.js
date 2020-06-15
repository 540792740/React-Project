/*
* Created by Peter on 06/15/2020
*/

var ejs = require('ejs');
var fs = require('fs');

var app = {
    //login
    login: function (req, res) {
        console.log('Login');
        ejs.renderFile('Views/form.ejs', {}, function (err, data) {
            res.end(data);
        })
        // res.end('login')
    },
    register: function (req, res) {
        console.log('register')
        res.end('register')

    },
    dologin:function(req,res){
        var postStr = '';
        req.on('data', function (chunk) {
            postStr += chunk;
        })
        req.on('end', function (err, chunk) {
            console.log(postStr);

            fs.appendFile('login.txt', postStr + '\n', function (err) {
                if (err) {
                    console.log(err);
                    return
                }
                console.log("successful write")
            })

            res.end("<script>alert('Sucessful'); history.back()</script>>")
        })
    },
    home: function (req,res) {
        console.log('home')
        res.end('home')

    }
}
//
// app.login('req', 'res');
// app["login"]('req');

module.exports = app;
