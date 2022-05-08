// Sample code to read input and write output:

/*
function main(input) 
{
    process.stdout.write("Hello " + input);  // Write output to STDOUT
}
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) 
{
        stdin_input += input;   // Read input from STDIN
});

process.stdin.on("end", function () 
{
        main(stdin_input);
});

*/

// Warning: Printing unwanted or ill-formatted 
// data to output will cause the test cases to fail

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = [];

process.stdin.on("data", function (input) 
{
    stdin_input.push(input.replace(/\n/g, '')); 
    if(stdin_input.length === 2) {
        return process.stdin.emit('end');
    }
        
        
});

process.stdin.on("end", function () 
{
        return main(stdin_input);
});


function main(input){
      let a = input[0]
      let b = input[1]
      let binaryA = Number(a).toString(2)
      let binaryB = Number(b).toString(2)
      let flip = 0
      if(binaryA.length > binaryB.length){
      	for(var i =0; i< binaryA.length; i++){
      		if(binaryA[i] !== binaryB[i]){
      			flip++
      		}
      	}
      } else {
      	for(var i =0; i< binaryB.length; i++){
      		if(binaryB[i] !== binaryA[i]){
      			flip++
      		}
      	}
      }
      console.log(flip)
      return flip;
}