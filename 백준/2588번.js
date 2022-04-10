const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input[0] * input[1][2]);
console.log(input[0] * input[1][1]);
console.log(input[0] * input[1][0]);
console.log(input[0] * input[1]);
