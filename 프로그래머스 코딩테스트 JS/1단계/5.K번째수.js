function solution(array, commands) {
  let newArray = [];
  let returnArray = [];
  for (let index = 0; index < commands.length; index++) {
    let i = commands[index][0];
    let j = commands[index][1];
    let k = commands[index][2];
    let sortArray = [];
    newArray = array.slice(i - 1, j);
    sortArray = newArray.sort((a, b) => a - b);
    returnArray.push(sortArray[k - 1]);
  }
  //console.log(returnArray);
  return returnArray;
}
// test
// let array = [1, 5, 2, 6, 3, 7, 4];
// let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
// solution(array, commands);