function solution(nums) {
  let answer = 0;
  let pick = nums.length / 2;
  let set = new Set(nums);
  let setArr = [...set];
  if (setArr.length < pick) {
    answer = setArr.length;
  } else {
    answer = pick;
  }
  //console.log(answer);
  return answer;
}
//test
// let nums = [3, 3, 3, 2, 2, 2];
// solution(nums);
// 5점