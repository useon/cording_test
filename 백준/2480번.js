const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x) => +x);

const a = input[0];
const b = input[1];
const c = input[2];

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if ((a === b && b !== c) || (a === c && b !== c)) {
  console.log(1000 + a * 100);
} else if (b === c && a !== b) {
  console.log(1000 + b * 100);
} else if (a !== b && b !== c && c !== a) {
  let arr = [a, b, c];
  const max = Math.max(...arr)
  console.log(max * 100);
}
