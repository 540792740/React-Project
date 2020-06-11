var fs = require('fs');

function getMime() {
    fs.readFile('../mime.json', function (err, data) {
        return data.toString();
    })
}

console.log(getMime());;
