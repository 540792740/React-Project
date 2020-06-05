var fs = require('fs');

fs.stat('html', function (err, stats) {
// fs.stat('03_config.js', function (err, stats) {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('file: ' + stats.isFile());
    console.log('Dictionary: ' + stats.isDirectory());

})

//mkdir
fs.mkdir("MkdirTest", (error)=>{
    if(error){console.log(error)}
    else{console.log("Successful Mkdir")}
})

fs.writeFile('html/log.log', 'Hello ~ \n', (error) =>{
    if(error){console.log(error)}
    else{console.log("Successful write")}
})
