function solution(n, numlist) {
    var answer = [];
    
//     for(let i=0; i<numlist.length; i++){
//         if(numlist[i]%n===0){
//             answer.push(numlist[i])
//         }
//     }
    
    numlist.map(item => item % n===0?answer.push(item):null)
    return answer;
}