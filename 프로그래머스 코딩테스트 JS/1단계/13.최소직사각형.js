function solution(sizes) {
  let answer = 0;
  let width = [];
  let height = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      width.push(sizes[i][1]);
      height.push(sizes[i][0]);
    } else {
      width.push(sizes[i][0]);
      height.push(sizes[i][1]);
    }
  }
  let maxWidth = Math.max(...width);
  let maxHeight = Math.max(...height);
  answer = maxWidth * maxHeight;
  return answer;
}

// test
// let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
// solution(sizes);
// 2