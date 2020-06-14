####1. HTTP module, url Module
```
    var http = require('http');
    var url = require('url');

    http.createServer(func(req, res){
        var query = url.parse(req.url, true);        

        res.writeHead();
        res.write();
        res.end();    
    }).listen(8888)
```


####2. Supervisor
add a listener
`npm -g install supervisor`

run server in terminal: `supervisor app.js`

####3. Install special version 
```
    npm info jquery
    npm install jquery@1.8.0
    npm uninstall jquery
```

####4. package.json:
    find all module if there is a package.json 
    `npm init -s`   -> generate 
    `npm intall`    -> install all module in package.json

####5. nd5-node: encrypt
    `npm install` cannot install nd5-node automatically
    `npm install md5-node -s`
    
####6. fs Module    
```
    1.  Check file or dic
        state.isFile()
        state.ifDirectory()
    2. fs.mkdir("MkdirTest", (error)=>{})
    3. fs.writeFile('html/log.log', 'Hello ~ \n', (error) =>{})
    4. fs.appendFile(file, data, callback)
    5. fs.readFile(path, 'utf-8', callback)
    6. fs.readdir('html', (error, files) =>{}
    7. fs.rename('html/log.log', 'html/newLog.log', (error) =>{})
    8. fs.rmdir  delete dir
    9. fs.unlink delete file
    10. readStream = fs.createReadStream:
            readStream.on('data')
            readStream.on('end')
            readStream.on('error')
    11. writeStream = fs.createWriteStream('../html/output.txt');
            writeStream.on('finish',function(){})
            writeStream.on('error',function(){})
    12. var readerStream = fs.createReadStream('../html/input.txt');
        var writerStream = fs.createWriteStream('../html/output_pip.txt');
        readerStream.(writerStream)
```

####7. web server
```
    1. http.createServer(function (req, res) {
            var pathName = url.parse(req.url).pathname;
            if (pathName === '/'){}
            if(pathName !== '/favicon.ico'){}
            

        }).listen(8001)

```

#### 8. Event
```
    1. 

```    
    
        
