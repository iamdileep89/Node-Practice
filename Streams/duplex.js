const fs = require('fs');
const { PassThrough, Duplex } = require('stream')
const readStream = fs.createReadStream('./anime_dancing.mp4');
const writeStream = fs.createWriteStream('./copy.mp4')

class Throttle extends Duplex {
    constructor(ms){
        super()
        this.delay = ms
    }
    _read(){

    }
    _write(chunk, encoding, callback){
        this.push(chunk)
        setTimeout(callback, this.delay)
    }

    _final(){
        this.push(null)
    }
}


const report = new PassThrough();
const throttle = new Throttle(1000);

let total = 0
report.on('data', (chunk) => {
    total += chunk.length
    console.log('bytes: ', total);
})

readStream.pipe(throttle).pipe(report).pipe(writeStream).on('error', console.error);