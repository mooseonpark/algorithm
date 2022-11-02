function solution(s1, s2) {
    var answer = 0;
    // 방법1
//     for(let i=0; i<s1.length;i++){
//       for(let j=0; j<s2.length; j++){
//         s1[i]===s2[j]?answer++:null
//   } 
// }
    // 방법2
    // let addArr = s1.concat(s2);
    // let delDuplicate = new Set(addArr);
    // let newArr = Array.from(delDuplicate);
    // answer = addArr.length - newArr.length
    
    //방법3
    for(let i=0; i<s1.length;i++){
        s2.filter(v=>v===s1[i]?answer++:null)
    }
    return answer;
}