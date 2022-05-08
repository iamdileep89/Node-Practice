const { stat, createReadStream } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const fileName = './anime_dancing.mp4';

const fileInfo = promisify(stat);

createServer(async (req, res) => {
    const { size } = await fileInfo(fileName)
    const range = req.headers.range;
    console.log('Range: ', range)
    if(range){
        let [start, end] = range.replace(/bytes=/, '').split('-');
        start = parseInt(start, 10)
        end = end ? parseInt(start, 10) : size-1
        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': (start-end)+1,
            'Content-Type': 'video/mp4'
        })
        createReadStream(fileName, {start, end}).pipe(res)
    } else {
        res.writeHead(200, {
            'Content-Length': size,
            'Content-Type': 'video/mp4'
        })
        createReadStream(fileName).pipe(res)
    }
    
}).listen(5050, () => console.log('server running on 5050'))