function solution(before, after) {
    // var answer = 0;
    // before.split('').reverse().join('')==after?answer=1:answer=0;
    before = [...before].sort().join('')
    after = [...after].sort().join('')
    return before===after?1:0;
}