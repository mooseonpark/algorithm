let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
let arr = input[1].split('');
let sum = 0;
for (let i = 0; i < count; i++) {
	sum += +arr[i];
}
console.log(sum);