const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split('');
  input[i] = Number(arr.reverse().join(''));
}
console.log(Math.max(...input));
