var fs = require('fs')


exports.getMine = function (fs, extname) {
//     fs.readFile('../mime.json', function (err, data) {
//         if(err){
//             console.log("mime.json does not exist")
//             return false;
//         }
//         var Mime = JSON.parse(data.toString())
//         console.log(Mime[extname]);
//         return Mime[extname] || 'text/html';
//
//     })

    var data = fs.readFileSync('../mime.json');
    var Mimes = JSON.parse(data.toString());
    return Mimes[extname] || 'text/html';

}

