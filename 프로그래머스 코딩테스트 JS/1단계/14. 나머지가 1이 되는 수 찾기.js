function solution(n) {
  let answer = 0;
  let arr = [];
  for (let x = 1; x < n + 1; x++) {
    if (n % x === 1) {
      arr.push(x);
    }
  }
  answer = Math.min(...arr);
  return answer;
}

// test
// let n = 10;
// solution(n);
// 3