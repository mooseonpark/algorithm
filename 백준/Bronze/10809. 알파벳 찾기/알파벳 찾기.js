let input = require('fs').readFileSync('/dev/stdin').toString();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const word = input.split(''); // b a e k j o o n
let answer = [];

for (let i = 0; i < alphabet.length; i++) {
	answer.push(word.findIndex((item) => item === alphabet[i]));
}
console.log(answer.join(' '));