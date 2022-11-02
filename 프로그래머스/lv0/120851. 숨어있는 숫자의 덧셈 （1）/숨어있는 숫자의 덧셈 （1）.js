function solution(my_string) {
    var answer = 0;
    // my_string = my_string.split('').map(n=>+n);
    // for(let i=0; i<my_string.length;i++){
    //     isNaN(my_string[i])?answer+=my_string[i]:null;
    // }
    let arr = my_string.split('').map(n => +n);
    let filteredArr = arr.filter(v => v);
    answer = filteredArr.reduce((pre,cur) => pre+cur)
    return answer;
}