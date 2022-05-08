function longcomputation(){
    let sum = 0;
    for(let i =0; i<1e9; i++){
        sum+=i
    }
    return sum
}

process.on('message', (message) => {
    if(message === 'start'){
        console.log(`message in child file: ${message}`);
        const sum = longcomputation()
        process.send(sum)
    }
})