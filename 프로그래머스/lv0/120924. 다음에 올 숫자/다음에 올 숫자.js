function solution(common) {
    let answer = 0;
    let one = common[0];
    let two = common[1];
    let three = common[2];
    if(two-one===three-two){
        answer = common[common.length-1] + two - one;
    } else if(three % one === 0 && three % two === 0){
        answer = common[common.length-1] * two / one;
    }
    return answer;
}