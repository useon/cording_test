const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let a = input[0].replace('\r', '').split(' ');
let b = input[1].split(' ');
let arr = [];
for (let i = 0; i < a[0]; i++) {
  if (a[1] > Number(b[i])) {
    arr.push(Number(b[i]));
  }
}
console.log(arr.join(' '));
