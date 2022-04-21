const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let arr = [];
const num2 = ['A', 'B', 'C'];
const num3 = ['D', 'E', 'F'];
const num4 = ['G', 'H', 'I'];
const num5 = ['J', 'K', 'L'];
const num6 = ['M', 'N', 'O'];
const num7 = ['P', 'Q', 'R', 'S'];
const num8 = ['T', 'U', 'V'];
const num9 = ['W', 'X', 'Y', 'Z'];

for (let i = 0; i < input.length; i++) {
  if (num2.includes(input[i])) {
    arr.push(2);
  } else if (num3.includes(input[i])) {
    arr.push(3);
  } else if (num4.includes(input[i])) {
    arr.push(4);
  } else if (num5.includes(input[i])) {
    arr.push(5);
  } else if (num6.includes(input[i])) {
    arr.push(6);
  } else if (num7.includes(input[i])) {
    arr.push(7);
  } else if (num8.includes(input[i])) {
    arr.push(8);
  } else if (num9.includes(input[i])) {
    arr.push(9);
  }
}
const sum = arr.reduce((a, b) => a + b) + arr.length;
console.log(sum)
