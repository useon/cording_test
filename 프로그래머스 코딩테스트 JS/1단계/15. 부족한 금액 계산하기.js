function solution(price, money, count) {
  let answer = 0;
  let cost = 0;
  for (let i = 1; i < count + 1; i++) {
    cost += price * i;
  }
  if (cost > money) {
    answer = cost - money;
  } else {
    answer = 0;
  }
  return answer;
}

// test
// let price = 3;
// let money = 20;
// let count = 4;
// solution(price, money, count)
// 10