function solution(n) {
  let answer = 0;
  let ternary = n.toString(3);
  let reverse = ternary.split('').reverse().join('');
  answer = parseInt(reverse, 3);
  return answer;
}

//test
// let n = 125;
// solution(n);
// 5점