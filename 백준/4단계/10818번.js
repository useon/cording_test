const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/, '').split('\n');

let arr = input[1].split(' ').map((x) => +x);

console.log(Math.min(...arr), Math.max(...arr))
