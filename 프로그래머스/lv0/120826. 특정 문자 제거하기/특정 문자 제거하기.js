function solution(my_string, letter) {
    var answer;
    answer = my_string.split('').map(n=>n!==letter?n:'').join('');
    // for(let i=0; i<my_string.length;i++){
    //       if(letter!==my_string[i]){
    //         answer+=my_string[i];
    //       }
    //     }

    return answer;
}