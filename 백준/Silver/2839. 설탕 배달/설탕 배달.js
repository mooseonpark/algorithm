let input = +require('fs').readFileSync('/dev/stdin').toString();

let result = 0;

while (true) {
	if (input % 5 === 0) {
		result += input / 5;
		break;
	}
    
	input -= 3;
	result++;
    
	if (input < 0) {
		result = -1;
		break;
	}
}

console.log(result);
