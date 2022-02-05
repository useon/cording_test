function solution(s) {
  let answer = true;
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < s.length; i++) {
    if (nums.find(e => e == s[i]) === undefined || !(s.length === 4 || s.length === 6)) {
      answer = false;
      break;
    }
  }
  return answer;
}

//test
// let s = "123123123"
// solution(s)
// 9
