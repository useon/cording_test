const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x) => +x);
const a = input[0];
const b = input[1];
const c = input[2];

if (c <= b) {
  console.log(-1);
} else {
  console.log(Math.floor(a / (c - b)) + 1)
}
