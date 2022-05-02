const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());
let denominator = 1;
let numerator = 1;
let startDenominator;
let startNumerator;
let row = 2;

if (input !== 1) {
  for (let n = 2; n <= input; n++) {
    if (row % 2 === 0) {
      denominator++;
      if (n === input) {
        break;
      }
      startDenominator = denominator;
      startNumerator = numerator;
      for (let i = startNumerator; i < startDenominator; i++) {
        if (n === input) {
          break;
        } else {
          n++;
        }
        denominator--;
        numerator++;
      }
      row++;
    } else {
      numerator++;
      if (n === input) {
        break;
      }
      startDenominator = denominator;
      startNumerator = numerator;
      for (let j = startDenominator; j < startNumerator; j++) {
        if (n === input) {
          break;
        } else {
          n++;
        }
        denominator++;
        numerator--;
      }
      row++;
    }
  }
  console.log(`${numerator}/${denominator}`);
} else {
  console.log(1 + "/" + 1);
}
