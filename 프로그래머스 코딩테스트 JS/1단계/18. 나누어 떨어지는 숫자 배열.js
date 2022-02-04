function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b);
  }
  return answer;
}

// test
// let arr = [3, 2, 6];
// let divisor = 10;
// solution(arr, divisor)