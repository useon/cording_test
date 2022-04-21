const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split('');
let nums = [];
const arr = [...new Set(input)]
let str;
for (let i = 0; i < arr.length; i++) {
  str = arr[i];
  nums.push(input.filter((x) => x === str).length);
}
const max = Math.max(...nums);
const result = arr[nums.indexOf(max)]
if (nums.filter((x) => x === max).length > 1) {
  console.log("?");
} else {
  console.log(result);
}
