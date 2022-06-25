function solution(nums) {
  let count = 0;
  let isPrime = true;
  let i = 0;
  let j = 1;
  let k = 2;

  while (i < nums.length - 2) {
    while (j < nums.length - 1) {
      while (k < nums.length) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 2) {
          count++;
        } else {
          for (let n = 2; n <= Math.floor(Math.sqrt(sum)); n++) {
            if (sum % n === 0) {
              isPrime = false;
              break;
            }
          }
        }
        if (isPrime === true) {
          count++;
        }
        isPrime = true;
        k++;
      }
      j++;
      k = j + 1;
    }
    i++;
    j = i + 1;
    k = j + 1;
  }
  return count;
}
