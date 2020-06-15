/*
* Created by Peter on 06/15/2020
*/

var app = {
    //login
    login: function (req, res) {
        console.log('Login')
    },
    register: function (req, res) {
        console.log('Register')
    }
}

app.login('req', 'res');
app["login"]('req');
