function solution(array, n) {
    var answer = [];
    for(let i=0; i<array.length;i++){
        if(n === array[i]){
            answer.push(array[i]);
        }
    }
    return answer.length;
}