let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let hour = +input[0];
let minute = +input[1];

if (minute - 45 > 0) {
	hour, (minute = minute - 45);
} else if (minute - 45 == 0) {
	hour, (minute = 0);
} else if (hour > 0 && minute - 45 < 0) {
	(hour = hour - 1), (minute = 60 + (minute - 45));
} else if (hour === 0 && minute - 45 < 0) {
	(hour = 23), (minute = 60 + (minute - 45));
}
console.log(hour, minute);