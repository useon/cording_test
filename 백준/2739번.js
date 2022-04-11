const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x) => +x);

for (let i = 1; i < 10; i++) {
  let result = input * i;
  console.log(`${input} * ${i} = ${result}`);
}
