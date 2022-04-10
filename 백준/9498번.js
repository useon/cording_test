const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());

if (input > 89) {
  console.log('A');
} else if (input < 90 && input > 79) {
  console.log('B');
} else if (input < 80 && input > 69) {
  console.log('C');
} else if (input < 70 && input > 59) {
  console.log('D');
} else {
  console.log('F');
}
