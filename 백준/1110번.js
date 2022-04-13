const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
const initial = input;
let count = 0;

while (true) {
  let a = Math.floor(input / 10);
  let b = input % 10;
  let sum = (a + b) % 10;
  input = Number(String(b) + String(sum));
  if (input === initial) {
    count++;
    break;
  }
  count++;
}
console.log(count);
