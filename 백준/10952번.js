const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n');
for (let i = 0; i < input.length; i++) {
  let a = Number(input[i][0]);
  let b = Number(input[i][2]);
  if (a === 0 && b === 0) {
    break;
  }
  console.log(a + b);
}
