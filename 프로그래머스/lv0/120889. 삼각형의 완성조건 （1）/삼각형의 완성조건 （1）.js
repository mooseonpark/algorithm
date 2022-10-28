function solution(sides) {
    var answer = 0;
    let max = sides.sort((a,b) => b-a)[0];
    sides[1]+sides[2] > max?answer=1:answer=2
    // let max = Math.max(...a)[0];
    
    return answer;
}