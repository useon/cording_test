const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n');

const total = input[1].split('').map((x) => +x).reduce((a, b) => a + b);
console.log(total);
