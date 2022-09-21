
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = input[0];
const arr = input[1].split(' ');
const sortedArr = arr.sort((a, b) => {
	return a - b;
});

console.log(`${sortedArr[0]} ${sortedArr[count - 1]}`);
