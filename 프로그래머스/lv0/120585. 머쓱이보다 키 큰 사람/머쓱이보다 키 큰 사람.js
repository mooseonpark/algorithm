function solution(array, height) {
    var answer = 0;
    // --- map함수 ---
    let a = array.map(n => n);
    answer = a.filter(n=> n>height).length;
    // --- for문 ---
    // for(let i=0; i<array.length; i++){
    //     if(array[i]>height){
    //         answer++;
    //     }
    // }
    return answer;
}

 