const str = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(str==='' ? 0 : str.split(' ').length);