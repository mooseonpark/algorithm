let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
	const arr = input[i].split(' ');
	let a = +arr[0];
	let b = +arr[1];
	console.log(a + b);
}
