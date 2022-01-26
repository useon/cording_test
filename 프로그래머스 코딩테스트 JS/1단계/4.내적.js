let answer = 0;
function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i]
  }
  // console.log(answer)
  return answer;
}
// test
// const a = [-1, 0, 1];
// const b = [1, 0, -1];
// solution(a, b);