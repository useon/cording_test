function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let set = new Set([...answer])
  let setArr = [...set]
  answer = setArr.sort((a, b) => a - b);
  return answer;
}

// test
// let numbers = [2, 1, 3, 4, 1];
// solution(numbers)
// 5