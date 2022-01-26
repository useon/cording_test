function solution(numbers) {
  let answer = 0;
  let allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const notIncluded = allNumbers.filter(x => !numbers.includes(x));
  for (let i = 0; i < notIncluded.length; i++) {
    answer = answer + notIncluded[i];
  }
  return answer;
}

const numbers = [5, 8, 4, 0, 6, 7, 9];

solution(numbers);