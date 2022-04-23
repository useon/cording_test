const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split(/\n/);
let arr = [];
let count = 0;

for (let i = 1; i <= Number(input[0]); i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (j === 0) {
      arr.push(input[i][j]);
    }
    if (j > 0 && input[i][j - 1] !== input[i][j]) {
      arr.push(input[i][j]);
    }
  }
  str = [...new Set(arr)].join('');
  arr = arr.join('');

  if (str === arr) {
    count++;
  }
  str = '';
  arr = [];
}
console.log(count);
