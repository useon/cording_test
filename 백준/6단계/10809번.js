const fs = require('fs');
const { Z_ASCII } = require('zlib');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let result = [];

for (let i = 97; i < 123; i++) {
  let ASCIItoChar = String.fromCharCode(i);
  result.push(input.indexOf(ASCIItoChar));
}
console.log(result.join(' '));
