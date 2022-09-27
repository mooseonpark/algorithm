let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = input[0];
for (let i = 1; i <= count; i++) {
	let arr = Array.from(input[i].split(' ')[1]);
	let repeatedArr = arr.map((item) => item.repeat(input[i][0]));
	console.log(repeatedArr.join(''));
}
