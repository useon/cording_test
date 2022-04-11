const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
let total = '';

for (let i = 1; i <= input; i++) {
  total += i + '\n';
}
console.log(total)
