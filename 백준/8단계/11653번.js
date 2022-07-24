const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim())
let num = 2;

while (input !== 1) {
  if (input % num === 0) {
    console.log(num);
    input = Math.floor(input / num);
  } else {
    num++;
  }
}
