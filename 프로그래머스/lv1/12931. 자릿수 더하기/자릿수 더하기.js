function solution(n){
    var answer = 0;
    let arr = n.toString().split('')
    // for(let i=0; i<arr.length;i++){
    //     answer+= +arr[i]
    // }
    
    const finalAnswer = arr.reduce(
        (acc, cur) => acc + +cur, answer
    );
    return finalAnswer;
}

