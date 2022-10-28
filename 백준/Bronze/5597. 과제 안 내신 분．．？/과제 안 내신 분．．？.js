let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')
	.map((n) => +n);
// console.log(input);
let newArr = [];

for (let i = 1; i <= 30; i++) {
	if (!input.includes(i)) {
		// newArr.push(i);
		console.log(i);
	}
}