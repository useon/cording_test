const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x) => +x);

const a = input[0];
const b = input[1];
const total = (((a * 60) + b) - 45);

let arr = [];
if (total < 0) {
  arr.push(Math.floor((24 * 60 + total) / 60));
  arr.push(Math.floor((24 * 60 + total) % 60));
} else {
  arr.push(Math.floor(total / 60));
  arr.push(total % 60);
}
arr = arr.join(' ');
console.log(arr)
