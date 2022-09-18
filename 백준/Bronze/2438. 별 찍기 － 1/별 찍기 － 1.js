let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let stars = +input[0];
let answer = '';

for (let i = 0; i < stars; i++) {
	console.log((answer += '*'));
}
