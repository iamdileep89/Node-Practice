const fs = require('fs');

const readStream = fs.createReadStream('./anime_dancing.mp4');
const writeStream = fs.createWriteStream('./copy.mp4')


readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('end', () => {
    writeStream.end()
})
  
readStream.on('error', (err) => {
    console.log("an err has occured");
    console.error(err);
})

writeStream.on('close', (err) => {
    process.stdout.write('File copied \n')
})
  
