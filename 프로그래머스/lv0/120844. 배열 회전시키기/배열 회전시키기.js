function solution(numbers, direction) {
    // var answer = [];
    if(direction === 'right'){
      let popNum = numbers[numbers.length-1];
      numbers.pop();
      numbers.unshift(popNum);
      // console.log(numbers);
    } else if(direction === 'left'){
      let shiftNum = numbers[0];
      numbers.shift();
      numbers.push(shiftNum);
      // console.log(numbers);
    }
    return numbers;
}