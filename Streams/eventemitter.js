const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter()
let m=0
// emitter.on('event', (a, b) =>{
//     console.log(++m)
//     console.log(a, b, this, this===emitter);
// })

// emitter.emit('event');

// emitter.emit('event', 'a', 'b')

emitter.emit('event');
emitter.emit('event');

const path = require('path')

console.log(path.join('/foo','bar','baz/asdf','quux','..'))