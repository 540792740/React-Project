var events = require('events');

var EventEmitter = new events.EventEmitter();

EventEmitter.on('to_parent', function(data){
    console.log("Received")
    console.log(data);
    EventEmitter.emit('to_Mime','Data In Mime');

});

EventEmitter.on('to_Mime', function(data){
    console.log("Mime Received")
    console.log(data)
})

setTimeout(function () {
    EventEmitter.emit('to_parent','Data InParent');
}, 2000)
