// 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력 
// 혜원(이)가 총 4표로 반장이 되었습니다.

const name = prompt('type a name of candidates: ').split('').sort(); 
console.log(name[0])
console.log(name)
//희야 희야 희야 무 무 무 무 선 선 가

console.log(name.filter(() => { (name[0]).length });
let winner=[];
let num;
for(let i =0; i<name.length;i++){
	
}

console.log(`${winner}(이)가 총 ${num}표로 반장이 되었습니다.`);

// 답
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner1 = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner1 = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner1}(이)가 총 ${result[winner1]}표로 반장이 되었습니다.`);