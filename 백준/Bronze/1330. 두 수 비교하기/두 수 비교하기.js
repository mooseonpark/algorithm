let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = +input[0];
const b = +input[1];

if (a > b){
    console.log('>');
}else if(a < b){
    console.log('<');
} else{
    console.log('==');
}