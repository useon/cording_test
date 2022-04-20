const range = 10000;
let selfNumber = [];
let constructor = [];

function d(n) {
  let num = n;
  let result = 0;
  for (let i = 0; i < String(n).length; i++) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return n + result;
}

for (let i = 1; i <= range; i++) {
  selfNumber.push(i);
  constructor.push(d(i));
}

selfNumber = selfNumber.filter((x) => !constructor.includes(x));

for (let i = 0; i < selfNumber.length; i++) {
  console.log(selfNumber[i]);
}
