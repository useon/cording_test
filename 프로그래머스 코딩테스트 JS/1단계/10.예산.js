function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) {
      answer = i;
      break;
    } else {
      budget = budget - d[i];
    }
    answer = d.length;
  }
  return answer;
}

//test
// let d = [2, 2, 3, 3];
// let budget = 10;
// solution(d, budget);
// 6점