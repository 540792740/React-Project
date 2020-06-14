var events = require('events');

var EventEmitter = new events.EventEmitter();

EventEmitter.on('to_parent', function(){
    console.log("Received")
})

setTimeout(function () {
    EventEmitter.emit('to_parent','Data Inside');
}, 2000)
