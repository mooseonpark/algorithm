function solution(arr) {
    var answer = 0;
    arr.map(n=>answer+=n/arr.length);
    return answer;
}