const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n').map((x) => +x);
let multiplication = input[0] * input[1] * input[2];

multiplication = String(multiplication);
console.log((multiplication.match(/0/g) || []).length);
console.log((multiplication.match(/1/g) || []).length);
console.log((multiplication.match(/2/g) || []).length);
console.log((multiplication.match(/3/g) || []).length);
console.log((multiplication.match(/4/g) || []).length);
console.log((multiplication.match(/5/g) || []).length);
console.log((multiplication.match(/6/g) || []).length);
console.log((multiplication.match(/7/g) || []).length);
console.log((multiplication.match(/8/g) || []).length);
console.log((multiplication.match(/9/g) || []).length);
