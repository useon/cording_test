const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let star = '*';
for (let i = 1; i <= input; i++) {
  let spaceNum = input - i;
  const space = ' ';
  console.log(space.repeat(spaceNum) + star.repeat(i));
}
