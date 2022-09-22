let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let origin = input[1].split(' '); // 40 80 60
let count = +input[0]; // 3
let arr = input[1].split(' ');

let max = arr.sort((a, b) => {
	return b - a;
});
const M = +max[0]; // 80
let plus = 0;
for (let i = 0; i < count; i++) {
	plus += (+origin[i] / M) * 100;
}

console.log(plus / count);
