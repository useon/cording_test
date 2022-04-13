const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n').map((x) => +x);
const maxNum = Math.max(...input);
console.log(maxNum);
console.log(input.indexOf(maxNum) + 1);
