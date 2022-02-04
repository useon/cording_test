function solution(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i < b + 1; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i < a + 1; i++) {
      answer += i;
    }
  }
  return answer;
}

// test
// let a = 3;
// let b = 3;
// solution(a, b);
// 1