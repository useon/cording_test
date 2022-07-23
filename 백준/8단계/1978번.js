const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => x.replace('\r', ''));
let num = Number(input[0])
let arr = input[1].split(' ').map((x) => +x);
let isPrime = true;
let count = 0;
for (let i = 0; i < num; i++) {
  if (arr[i] !== 1) {
    for (let j = 2; j <= Math.floor(Math.sqrt(arr[i])); j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      count++;
    }
    isPrime = true;
  }
}
console.log(count);
