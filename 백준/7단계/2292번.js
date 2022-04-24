const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
let n = 1;
let total = 1;
while (true) {
  total += (6 * n);
  if (input <= total) {
    break;
  }
  n++;
}
if (input === 1) {
  console.log(n)
} else {
  console.log(n + 1)
}
