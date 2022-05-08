const cluster = require('cluster');
const express = require('express');
const os = require('os')


const cpus = os.cpus().length;




if(cluster.isMaster){
    for(let i=0; i<cpus; i++){
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} is killed`);
        cluster.fork()
    })
} else {
    const app = express()
    app.get('/', (req, res) => {
        for(let i = 0; i<1e8; i++){
    
        }
        res.send(`..ok process: ${process.pid}`)
        cluster.worker.kill()
    })
    app.listen(3000, () => console.log(`app is on 3000...process pid: ${process.pid}`))
}


