function solution(array) {
    var answer = 0;
    answer = array.toString().split('').filter(n=>+n===7).length;
    return answer;
}