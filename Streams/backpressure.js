const fs = require('fs');

const readStream = fs.createReadStream('./anime_dancing.mp4');
const writeStream = fs.createWriteStream('./copy.mp4', {
    highWaterMark: 16766
})


readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk)
    if(!result){
        console.log('backpressure\n')
        readStream.pause()
    }
})

readStream.on('end', () => {
    writeStream.end()
})
  
readStream.on('error', (err) => {
    console.log("an err has occured");
    console.error(err);
})

writeStream.on('drain', () => {
    console.log('drained')
    readStream.resume()
})

writeStream.on('close', (err) => {
    process.stdout.write('File copied \n')
})
  
