const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let sum = BigInt(input[0]) + BigInt(input[1]);
sum = String(sum).replace('n', '');
console.log(sum);
