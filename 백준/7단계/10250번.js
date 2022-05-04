const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split(/\n/g)
const num = Number(input[0]);
input = input.slice(1);
for (let i = 0; i < num; i++) {
  input[i] = input[i].replace(/\s/g, ',').split(',').map((x) => +x);
  const H = input[i][0];
  const W = input[i][1];
  const N = input[i][2];
  let line = Math.floor(N / H);
  const room = N % H;
  if (room === 0) {
    if (line < 10) {
      console.log(Number(String(H) + '0' + String(line)));
    } else {
      console.log(Number(String(H) + String(line)));
    }
  } else {
    line = Math.floor(N / H) + 1;
    console.log(room * 100 + line);
  }
}
