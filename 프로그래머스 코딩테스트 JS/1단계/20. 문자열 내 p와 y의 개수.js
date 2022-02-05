function solution(s) {
  let answer = true;
  let count_p = 0;
  let count_y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === 'P') {
      count_p++;
    } else if (s[i].toUpperCase() === 'Y') {
      count_y++;
    }
  }
  if (count_p === count_y) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// test
// let s = "Pyy";
// solution(s)
// 4