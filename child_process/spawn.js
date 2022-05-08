const { spawn } = require('child_process')

const child = spawn('find', ['/'])

child.stdout.on('data', (data)=> {
    console.log(`stddata: ${data}`);
})

child.stderr.on('data', (data)=> {
    console.log(`stderror: ${data}`);
})

child.on('error', (err) => {
    console.log(`Err: ${err}`);
})


child.on('exit', (code, signal) => {
    if(code) console.log(`Process exited with code: ${code}`);
    if(signal) console.log(`Process killed with signal: ${signal}`);
    console.log('done!!');
})