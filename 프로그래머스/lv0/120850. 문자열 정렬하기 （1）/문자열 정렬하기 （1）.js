function solution(my_string) {
    answer=[];
    my_string.split('').map(n=>!isNaN(n)?answer.push(+n):null)
    answer.sort();
    return answer;
}