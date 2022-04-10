const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let duplicate = input[0].slice(0, 51).toLowerCase();
console.log(`${duplicate}??!`);
