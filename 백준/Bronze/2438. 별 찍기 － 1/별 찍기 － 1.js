let input = require('fs').readFileSync('/dev/stdin').toString();
let number = +input;

let star = '';

for (let i = 0; i < number; i++) {
	star += '*';
	console.log(star);
}