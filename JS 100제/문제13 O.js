// 몇 번째 행성인가요?

// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력;

// 입력: 1;
// 출력: 수성;

let number = parseInt(
	prompt('태양계의 몇 번째 행성일까요? 숫자를 입력하세요 : ')
);
let solarSystem = [
	'수성',
	'금성',
	'지구',
	'화성',
	'목성',
	'토성',
	'천왕성',
	'해왕성',
];

for (let i = 1; i < 9; i++) {
	if (number === i) {
		alert(solarSystem[i - 1]);
	}
}

const planets = [
	'수성',
	'금성',
	'지구',
	'화성',
	'목성',
	'토성',
	'천왕성',
	'해왕성',
];

const n = prompt('몇 번째 행성인가요?');

console.log(planets[n - 1]);
// if (number === 1) {
// 	alert(solarSystem[0]);
// } else if (number === 2) {
// 	alert(solarSystem[1]);
// } else if (number === 3) {
// 	alert(solarSystem[2]);
// } else if (number === 4) {
// 	alert(solarSystem[3]);
// } else if (number === 5) {
// 	alert(solarSystem[4]);
// } else if (number === 6) {
// 	alert(solarSystem[5]);
// } else if (number === 7) {
// 	alert(solarSystem[6]);
// } else if (number === 8) {
// 	alert(solarSystem[7]);
// }
