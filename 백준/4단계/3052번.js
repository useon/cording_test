const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n').map((x) => +x);
let remainderArr = [];
for (let i = 0; i < input.length; i++) {
  remainderArr.push(input[i] % 42);
}
const set = new Set(remainderArr);
remainderArr = [...set];
console.log(remainderArr.length);
