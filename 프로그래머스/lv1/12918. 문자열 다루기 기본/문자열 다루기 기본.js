function solution(s) {
    var answer = '';
    let checkingNum = s.split('').map(n=>+n).includes(NaN);
    if(s.length === 4 || s.length === 6){
        checkingNum===true?answer=false:answer=true;    
    }else{
        answer=false;
    }
    
    return answer;
}