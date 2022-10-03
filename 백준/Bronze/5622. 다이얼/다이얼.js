let input = require('fs').readFileSync('/dev/stdin').toString().split('');

const dial = {
	2: 'ABC', //a 3
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ', // w 10
};
// +1

// const dial2 = [ABC, DEF, GHI, JKL, MNO, PQRS, TUV, WXYZ];

//WA
// for (let i = 0; i < input.length; i++) {
//   input[i]===dial.
// }
// console.log(dial[2]);
// console.log(dial[2].split('').join().includes(input[0]));
let sum = 0;
for (let i = 2; i <= 9; i++) {
	for (let j = 0; j < input.length; j++) {
		if (dial[i].split('').join().includes(input[j])) {
			sum = sum + i + 1;
		}
	}
}

console.log(sum);