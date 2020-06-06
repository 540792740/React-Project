var fs = require('fs')


exports.getMine = function (fs, extname) {
    fs.readFile('../mime.json', function (err, data) {
        if(err){
            console.log("mime.json does not exist")
            return false;
        }
    })
}
