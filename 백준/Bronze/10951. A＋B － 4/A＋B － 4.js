let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


for(let i=0; i<input.length-1;  i++){
    let input1 = +input[i][0] + +input[i][2]
    

    console.log(input1)
}