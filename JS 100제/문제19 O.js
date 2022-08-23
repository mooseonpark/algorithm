// 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
// 1번
const a = prompt('a');
const b = prompt('b');

const answer = a ** b;
console.log(answer);

// 2번
const [c, d] = parseInt(prompt('type two numbers here: ').split(''));

alert();

const answer2 = c ** d;
console.log(answer);

// 답. 거듭제곱 함수도 있었구나 처음 알았다.
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
