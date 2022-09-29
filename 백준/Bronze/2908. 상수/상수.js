let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let arr = [];
for (let i = 0; i < input.length; i++) {
	for (let j = 2; j >= 0; j--) {
		arr.push(input[i][j]);
	}
}

let num1 = arr.slice(0, 3).join('');
let num2 = arr.slice(3, 6).join('');
console.log(Math.max(num1, num2));