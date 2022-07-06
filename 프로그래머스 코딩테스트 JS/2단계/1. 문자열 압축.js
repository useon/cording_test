function solution(s) {
  let answer = s.length;
  let temp = s.split("");
  let spliceArr = [];
  let count = 1;

  for (let unit = 1; unit < s.length; unit++) {
    while (temp.length > 0) {
      spliceArr.push(temp.splice(0, unit).join(""));
    }
    for (let i = 0; i < spliceArr.length; i++) {
      if (spliceArr[i] === spliceArr[i + 1] && spliceArr[i + 1] !== undefined) {
        let j = i;
        while (spliceArr[j] === spliceArr[j + 1]) {
          count++;
          j++;
        }
        spliceArr.splice(i, count - 1, count);
        count = 1;
      }
    }
    spliceArr = spliceArr.join("");
    if (answer >= spliceArr.length) {
      answer = spliceArr.length;
    }
    spliceArr = [];
    temp = s.split("");
  }
  return answer;
}
