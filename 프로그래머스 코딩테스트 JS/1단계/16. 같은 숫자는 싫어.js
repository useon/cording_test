function solution(arr)
{
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i-1] !== arr[i]){
          answer.push(arr[i])
        }
      }
      console.log(answer);
    return answer;
}

//test
// let arr = [4,4,4,3,3];
// solution(arr);
// 4
