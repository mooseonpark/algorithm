let input = require('fs').readFileSync('/dev/stdin').toString().toUpperCase();
const arr = new Array(26).fill(0); // 알파벳 개수에 맞춰 0으로 채운 배열 생성

for (let i = 0; i < input.length; i++) {
	arr[input.charCodeAt(i) - 65]++; // 해당 알파벳의 아스키코드 자리에 +1 ex.65-65= 0 <-'A'
}

const max = Math.max(...arr);
let answer =
	arr.filter((val) => val === max).length === 1
		? String.fromCharCode(arr.findIndex((val) => val === max) + 65)
		: '?';
console.log(answer);
