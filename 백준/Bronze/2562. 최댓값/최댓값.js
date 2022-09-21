let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const origin = input.map((n) => n);
const sortedArr = input.sort((a, b) => {
	return b - a;
});
const max = +sortedArr[0]; //85

for (let i = 0; i < input.length - 1; i++) {
	if (+origin[i] === max) {
		// console.log(max + '\n' + (i + 1));
		console.log(`${max}${'\n'}${i + 1}`);
	}
}