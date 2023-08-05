function solution(num_list) {
    var answer = 0;
    let findNegativeNum = num_list.find(n => n < 0)
    findNegativeNum < 0 ? answer = num_list.indexOf(findNegativeNum) : answer = -1;
    return answer;
}