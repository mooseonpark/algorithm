let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let number = input[0];

let sum = '';
for (let i = 1; i <= number; i++) {
	let [a, b] = input[i].split(' ');
	sum += `Case #${i}: ${+a + +b}` + '\n';
}
console.log(sum);
