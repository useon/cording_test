function solution(s) {
  let answerArr = [];
  let answer = '';
  let arr = s.split('');
  if (s.length % 2 === 0) {
    answerArr.push(arr[s.length / 2 - 1]);
    answerArr.push(arr[s.length / 2]);
  } else {
    answerArr.push(arr[parseInt(s.length / 2)]);
  }
  answer = answerArr.join('');
  return answer;
}

// test
// let s = "qwerh"
// solution(s)