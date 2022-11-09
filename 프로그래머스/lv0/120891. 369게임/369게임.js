function solution(order) {
    var answer = 0;
    order
    str = order.toString().split('');
    str.map(n=>n==='3'||n==='6'||n==='9'?answer++:null);
    return answer;
}