const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((x) => +x);
const up = input[0];
const down = input[1];
const height = input[2];

console.log(Math.ceil((height - down) / (up - down)));
