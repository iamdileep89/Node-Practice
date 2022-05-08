const { fork } = require('child_process');
const express = require('express');

const app = express()

app.get('/one', (req, res) => {
    const sum = longcomputation()
    res.send({sum})
})
app.get('/two', async (req, res) => {
    const sum = await longcomputationpromise()
    res.send({sum})
})
app.get('/three', (req, res) => {
    const child = fork('./longwork.js')
    child.send('start')
    child.on('message', (message) => {
        console.log(`message in master file: ${message}`);
        res.send({sum: message})
    })
    
})
app.listen(3000, () => console.log('app is on 3000...'))

function longcomputation(){
    let sum = 0;
    for(let i =0; i<1e9; i++){
        sum+=i
    }
    return sum
}
function longcomputationpromise(){
    return new Promise((resolve) => {
        let sum = 0;
        for(let i =0; i<1e9; i++){
            sum+=i
        }
        resolve(sum)
    })
}