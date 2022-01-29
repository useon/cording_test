let number1 = [1, 2, 3, 4, 5]
let number2 = [2, 1, 2, 3, 2, 4, 2, 5]
let number3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
  let winner = [];
  let countNum1 = 0;
  let countNum2 = 0;
  let countNum3 = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (number1[index1] === answers[i]) {
      countNum1++;
    }
    if (number2[index2] === answers[i]) {
      countNum2++;
    }
    if (number3[index3] === answers[i]) {
      countNum3++;
    }
    index1++;
    index2++;
    index3++;
    if (index1 === number1.length) {
      index1 = 0;
    }
    if (index2 === number2.length) {
      index2 = 0;
    }
    if (index3 === number3.length) {
      index3 = 0;
    }
  }

  if (countNum1 > countNum2 && countNum1 > countNum3) {
    winner.push(1);
  }
  else if (countNum2 > countNum1 && countNum2 > countNum3) {
    winner.push(2);
  }
  else if (countNum3 > countNum1 && countNum3 > countNum2) {
    winner.push(3);
  }
  else if (countNum1 === countNum2 && countNum2 === countNum3) {
    winner.push(1, 2, 3);
  }
  else if (countNum1 === countNum2 && countNum1 > countNum3) {
    winner.push(1, 2);
  }
  else if (countNum2 === countNum3 && countNum3 > countNum1) {
    winner.push(2, 3);
  }
  else if (countNum1 === countNum3 && countNum1 > countNum2) {
    winner.push(1, 3);
  }
  //console.log(winner)
  return winner;
}


//test
// let answers = [1, 2, 3, 4, 5]

// solution(answers);