let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');


//const num1 = BigInt(input[0]);
//const num2 = BigInt(input[1]);

//let add = num1 + num2;

//console.log(add.toString());

const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
