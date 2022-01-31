function solution(a, b) {
  let answer = '';
  let daysArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let weekArr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let days = 0;
  if (a > 1) {
    for (let i = 0; i < a - 1; i++) {
      days += daysArr[i];
    }
  }
  days += b
  let remainder = days % 7;
  answer = weekArr[remainder];
  return answer;
}

// test
// let a = 5;
// let b = 24;
// solution(a, b);
