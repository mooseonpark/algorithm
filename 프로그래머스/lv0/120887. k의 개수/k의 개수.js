function solution(i, j, k) {
    var answer = [];
    let count = 0;
    for(let h=i;h<=j; h++){  answer+=h.toString().split('').filter(n=>n.includes(k))
}
    answer.split('').map(n=>+n===k?count++:null);
    return count
}