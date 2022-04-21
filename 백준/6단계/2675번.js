const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split(/\n/);
let result = '';

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let R = Number(input[i][0]);
  result = '';
  for (let j = 0; j < arr[1].length; j++) {
    for (let k = 1; k <= R; k++) {
      result += arr[1][j];
    }
  }
  console.log(result)
}
