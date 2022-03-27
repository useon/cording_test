function solution(n) {
    let answer = 0;
    let arr = String(n).split('');
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    arr.sort((a, b) => b - a);
    answer = Number(arr.join(''));
    return answer;
}

//7
