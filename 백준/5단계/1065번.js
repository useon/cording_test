const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
let count = 0;

function progression(N) {
  let numToStr = String(N);
  let d = [];
  if (N < 100) {
    return 1;
  } else {
    for (let i = 0; i < numToStr.length; i++) {
      if ((i + 1) < numToStr.length) {
        d.push(Number(numToStr[i + 1]) - Number(numToStr[i]));
      }
    }
    d = [...new Set(d)];
    return d.length;
  }
}

for (let i = 1; i <= input; i++) {
  if (progression(i) === 1) {
    count++;
  }
}
console.log(count);
