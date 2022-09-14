const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let hour = +input[0].split(' ')[0];
let minute = +input[0].split(' ')[1];
let time = +input[1];

let h = 0;
let m = 0;

h = Math.floor((hour * 60 + minute + time) / 60);
m = (hour * 60 + minute + time) % 60;
if (h >= 24) {
  h -= 24;
}
console.log(`${h} ${m}`); 