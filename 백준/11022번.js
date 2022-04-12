const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].replace(/\r/, '');
  const a = Number(input[i][0]);
  const b = Number(input[i][2]);
  let total = a + b;
  console.log(`Case #${i}: ${a} + ${b} = ${total}`);
}
