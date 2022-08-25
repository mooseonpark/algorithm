// 2-gram

// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2 - gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

const str = prompt('단어를 입력하세요 : ').split('');
// console.log(str[0], str[1]);
// console.log(str[1], str[2]);
// console.log(str[2], str[3]);

for (let i = 0; i < str.length; i++) {
	for (let j = 1; j < str.length; j++) {
		console.log(str[i++], str[j]);
	}
}
// for (let i = 0; i < str.length; i++) {
// 	let left = str[i];
// 	console.log(left);
// 	for (let j = 1; j < str.length + 1; j++) {
// 		let right = str[j];
// 		console.log(left, right);
// 	}
// }

// 답
const data = prompt('문자를 입력하세요.');

for (let i = 0; i < data.length - 1; i++) {
	console.log(data[i], data[i + 1]);
}
