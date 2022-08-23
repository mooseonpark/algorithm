// 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력

// 입력 : 10 2
// 출력 : 5 0

const number = prompt('type two number here: ').split(' ');
const answer = Math.floor(number[0] / number[1]);
const answer2 = number[0] % number[1];
console.log(answer, answer2);

// 답. 19번 문제처럼 배열에서 빼온 요소를 10진수로 치환.
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
