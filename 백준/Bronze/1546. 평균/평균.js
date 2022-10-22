let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = +input[0];
let score = input[1].split(' '); // 40 80 60
let max = Math.max(...score);
let answer = 0;
let saejoon = score.map((x) => (answer += (x / max) * 100) / count);
console.log(saejoon[count - 1]);