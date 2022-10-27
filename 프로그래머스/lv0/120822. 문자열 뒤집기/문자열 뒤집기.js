function solution(my_string) {
    // var answer = [];
    // for(let i=my_string.length; i>=0; i--){
    //     answer.push(my_string[i])
    // }
    // answer = answer.join('');
    
    let answer = my_string.split('').map(word => word);
    answer = answer.reverse().join('');
    
    return answer;
    
}