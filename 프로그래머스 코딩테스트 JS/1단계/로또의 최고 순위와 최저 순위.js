function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let highestRanking;
  let lowestRanking;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      count++;
    }
  }
  const match = lottos.filter(x => win_nums.includes(x));
  const matchNum = match.length;
  if ((matchNum + count) === 6) {
    highestRanking = 1;
    lowestRanking = 1;
  }
  else if ((matchNum + count) === 5) {
    highestRanking = 2;
  }
  else if ((matchNum + count) === 4) {
    highestRanking = 3;
  }
  else if ((matchNum + count) === 3) {
    highestRanking = 4;
  }
  else if ((matchNum + count) === 2) {
    highestRanking = 5;
  }
  else if ((matchNum + count) <= 1) {
    highestRanking = 6;
  }

  if (matchNum <= 1) {
    lowestRanking = 6;
  }
  else if (matchNum === 2) {
    lowestRanking = 5;
  }
  else if (matchNum === 3) {
    lowestRanking = 4;
  }
  else if (matchNum === 4) {
    lowestRanking = 3;
  }
  else if (matchNum === 5) {
    lowestRanking = 2;
  }
  else if (matchNum === 6) {
    lowestRanking = 1;
  }

  answer = [highestRanking, lowestRanking];
  return answer;
}