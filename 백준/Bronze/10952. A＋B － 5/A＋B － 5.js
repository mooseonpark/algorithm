let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;

while (i < input.length) {
	let numbers = input[i].split(' ');
	let result = +numbers[0] + +numbers[1];
	if (result == 0) {
		break;
	} else {
		console.log(result);
	}
	i++;
}
