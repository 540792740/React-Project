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



// fs.writeFile('html/log.log', 'Hello ~ \n', (error) =>{
//     if(error){console.log(error)}
//     else{console.log("Successful write")}
// })
//
// fs.appendFile('html/log.log', 'Append ~ \n', (error) =>{
//     if(error){console.log(error)}
//     else{console.log("Successful write")}
// })
//
//
// fs.readFile('html/log.log', 'utf-8', (error) =>{
//     if(error){console.log(error)}
//     else{console.log("Successful read")}
// })

// fs.readdir('html', (error, files) =>{
//     if(error){console.log(error)}
//     else{
//         console.log(files)
//         console.log("Successful read dir")}
// })
//
// fs.rename('html/log.log', 'html/newLog.log', (error) =>{
//     if(error){console.log(error)}
//     else{console.log("Successful rename")}
// })

//mkdir
// fs.mkdir("MkdirTest", (error)=>{
//     if(error){console.log(error)}
//     else{console.log("Successful Mkdir")}
// })

fs.rmdir('MkdirTest', (error) =>{
    if(error){console.log(error)}
    else{
        console.log("Successful delete")}
})

