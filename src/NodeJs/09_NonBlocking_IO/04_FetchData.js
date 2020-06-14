var events = require('events');
var fs = require('fs');


var EventEmitter = new events.EventEmitter();

function getMime() {
    fs.readFile('../mime.json', function (err, data) {
        EventEmitter.emit('to_parent',data.toString());

    })
}
getMime();

EventEmitter.on('to_parent', function(data){
    console.log("Received")
    console.log(data);
    EventEmitter.emit('to_Mime','Data In Mime');

});

// Get Async data
