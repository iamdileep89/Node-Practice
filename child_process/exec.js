const { exec } = require('child_process');

exec('pwd', (err, stdout, stderr) => {
    if(err){
        console.log(`error: ${err}`)
        return
    }
    if(stderr){
        console.log(`stderr: ${stderr}`)
    }
    console.log(`stdout: ${stdout}`);
})