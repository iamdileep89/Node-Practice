const fs = require('fs');

const readStream = fs.createReadStream('./anime_dancing.mp4');
const writeStream = fs.createWriteStream('./copy.mp4')

readStream.pipe(writeStream).on('error', console.error);


const writeStream1 = fs.createWriteStream('./file.txt')
process.stdin.pipe(writeStream1);