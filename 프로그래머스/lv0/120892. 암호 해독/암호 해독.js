function solution(cipher, code) {
    var answer = [];
    for(let i=1;i<=cipher.length;i++){
      i % code === 0 ? answer.push(cipher[i-1]) : ''
    }

    return answer.join('');
}