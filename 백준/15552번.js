const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let total = 0;
for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].replace(/\r/gi, '').split(' ');
  total = total + (Number(input[i][0]) + Number(input[i][1])) + '\n';
}
console.log(total);
