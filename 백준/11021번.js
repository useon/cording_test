const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].replace(/\r/, '');
  let total = Number(input[i][0]) + Number(input[i][2]);
  console.log(`Case #${i}: ${total}`);
}
