function solution(left, right) {
  let answer = 0;
  let nums = [];
  for (let i = left; i < right + 1; i++) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.sqrt(nums[i]);
    if (Number.isInteger(sqrt) === true) {
      answer -= nums[i]
    } else {
      answer += nums[i]
    }
  }
  return answer;
}

//test
// let left = 24;
// let right = 27;
// solution(left, right);
// 3점