const { execFile } = require('child_process');
execFile('./simplesh.sh', (err, stdout, stderr) => {
    if(err){
        console.log(`error: ${err}`)
        return
    }
    if(stderr){
        console.log(`stderr: ${stderr}`)
    }
    console.log(`stdout: ${stdout}`);
})