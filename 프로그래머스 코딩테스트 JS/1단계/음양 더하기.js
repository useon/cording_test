function solution(absolutes, signs) {
  let answer = 0;
  let signsArr = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] == false) {
      signsArr.push(i);
    }
  }
  for (let i = 0; i < signsArr.length; i++) {
    let j = signsArr[i]
    absolutes[j] = absolutes[j] * -1;
  }
  for (let i = 0; i < absolutes.length; i++) {
    answer += absolutes[i];
  }
  return answer;
}

let absolutes = [1, 2, 3];
const signs = [false, false, true];

solution(absolutes, signs)
