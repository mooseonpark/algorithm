let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = input[0].split(' ')[0];
const num = +input[0].split(' ')[1]; 
const num2 = input[1].split(' '); 
let answer = '';

for (let i = 0; i < count; i++) {
	if (+num2[i] < +num) {
		answer += +num2[i] + ' ';
	}
}

console.log(answer);