const input=require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = input[1];

const first = num1 * num2[2];
const second = num1 * num2[1];
const third = num1 * num2[0];

const answer = num1 * +num2;

console.log(first, second, third, answer);