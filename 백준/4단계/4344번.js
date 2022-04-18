const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n');
let arr = [];
for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].split(' ').map((x) => +x);
  let num = input[i][0];
  arr = input[i].splice(1, input[i].length);
  let average = (arr.reduce((a, b) => a + b)) / num;
  let aboveScoreStudents = arr.filter((x) => x > average).length;
  let percent = (aboveScoreStudents / num * 100).toFixed(3);
  console.log(`${percent}%`);
  arr = [];
}
