function solution(array) {
    var answer = 0;
    array.sort((a,b)=>a-b);
    let middle = array.length / 2;
    answer = array[Math.floor(middle)];
    return answer;
}