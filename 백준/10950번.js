const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = [];
const num = input[0];
for (let i = 1; i <= num; i++) {
  let regex = /\r/gi;
  arr[i] = input[i].replace(regex, '');
  console.log(Number(arr[i][0]) + Number(arr[i][2]));
}
