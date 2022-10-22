function solution(n) {
    var answer = 0;
    // for(let i=1; i<1000; i++){
    //     if(n / i === i ){
    //         answer = 1;
    //     }else{
    //         answer = 2;
    //     }
    // }
    Number.isInteger(Math.sqrt(n))?answer=1:answer=2;
    return answer;
}