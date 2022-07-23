const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => +x);
let isPrime = true;
let primeArr = [];

for (let i = input[0]; i <= input[1]; i++) {
  if (i !== 1) {
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      primeArr.push(i);
    }
    isPrime = true;
  }
}

if (primeArr.length === 0) {
  console.log(-1);
} else {
  console.log(primeArr.reduce((a, b) => a + b));
  console.log(primeArr[0]);
}
