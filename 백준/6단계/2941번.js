const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (let i = 0; i < alphabet.length; i++) {
  let alphabetStr = alphabet[i];
  if (input.includes(alphabetStr)) {
    let str = input.match(alphabet[i])[0];
    let regexAlphabet = new RegExp(alphabetStr, "g");
    if (input.match(regexAlphabet).length > 1) {
      count += input.match(regexAlphabet).length - 1;
    }
    let regexAll = new RegExp(str, "g");
    input = input.replace(regexAll, ',');
    count++;
  }
}
input = input.replace(/,/g, '');
console.log(input.length + count);
