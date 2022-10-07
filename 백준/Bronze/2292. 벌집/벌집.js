let input = +require('fs').readFileSync('/dev/stdin').toString();

let roomCount = 1;
let sum = 1;

while(sum<input){
    sum += 6 * roomCount;
    roomCount++;
}
console.log(roomCount);