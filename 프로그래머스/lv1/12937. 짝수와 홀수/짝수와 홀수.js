function solution(num) {
    var answer = '';
    // if(num % 2 === 0){
    //     answer = "Even";
    // } else if(num % 2 === 1){
    //     answer = "Odd";
    // }
    num % 2 === 0 ? answer='Even' : answer="Odd";
    return answer;
}