const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => +x);
input = input.splice(0, input.length - 1);
let isPrime = true;
let count = 0;

input.map((num) => {
  for (let i = num + 1; i <= 2 * num; i++) {
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (i !== 1 && isPrime === true) {
      count++;
    }
    isPrime = true;
  }
  console.log(count);
  count = 0;
})
