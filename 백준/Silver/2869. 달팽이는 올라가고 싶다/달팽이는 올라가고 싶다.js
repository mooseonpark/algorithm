let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(el => +el);

let a = input[0];
let b = input[1];
let v = input[2];

let result = Math.ceil(((v - b) / (a - b)));
console.log(result);
