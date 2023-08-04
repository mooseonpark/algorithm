function solution(num_list) {
    var answer = 0;
    num_list.length >= 11 ? answer = num_list.reduce((acc,cur)=>acc+cur) :  answer = num_list.reduce((acc,cur)=>acc*cur)
    return answer;
}