const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n');
const scores = input[1].split(' ').map((x) => +x);
const max = Math.max(...scores);
let average = 0;

let newScores = [];

for (let i = 0; i < scores.length; i++) {
  newScores.push(scores[i] / max * 100);
}
average = (newScores.reduce((a, b) => a + b)) / newScores.length;
console.log(average);
