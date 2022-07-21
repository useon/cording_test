const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
let divisible = false;

if (input % 5 === 0) {
  console.log(Math.floor(input / 5));
} else {
  for (let i = Math.floor(input / 5); i > 0; i--) {
    let num = input;
    num -= 5 * i;
    if (num % 3 === 0) {
      console.log(i + Math.floor(num / 3));
      divisible = true;
      break;
    }
  }
  if (divisible === false) {
    if (input % 3 === 0) {
      console.log(Math.floor(input / 3));
    } else {
      console.log(-1)
    }
  }
}
