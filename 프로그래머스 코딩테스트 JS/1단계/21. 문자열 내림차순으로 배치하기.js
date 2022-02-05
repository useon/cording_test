function solution(s) {
  let answer = '';
  answer = s.split('').sort().reverse().join('');
  return answer;
}

// test
// let s = "Zbcdefg";
// solution(s)
// 2