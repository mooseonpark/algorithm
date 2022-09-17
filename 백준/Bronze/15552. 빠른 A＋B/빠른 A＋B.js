let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const number = +input[0];
let result = '';
 
for (let i = 1; i <= number; i++) {
    let [add1, add2] = input[i].split(' ');
    result += +add1 + +add2 + '\n';
}

console.log(result);