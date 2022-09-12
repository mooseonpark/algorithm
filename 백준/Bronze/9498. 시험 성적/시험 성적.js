let input = require("fs").readFileSync("/dev/stdin").toString();

const score = +input; 

if (score >= 90) {
	console.log('A');
} else if (score > 79) {
	console.log('B');
} else if (score > 69) {
	console.log('C');
} else if (score > 59) {
	console.log('D');
} else {
	console.log('F');
} 
 