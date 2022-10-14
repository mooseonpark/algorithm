let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [count, num] = input[0].split(' ');
let number = input[1].split(' ');
let answer = '';
for (let i = 0; i < +count; i++) {
	if (number[i] < +num) {
		answer += number[i] + ' ';
	}
}
console.log(answer);
