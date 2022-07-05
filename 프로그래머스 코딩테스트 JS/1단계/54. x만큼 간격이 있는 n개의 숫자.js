function solution(x, n) {
    let answer = [];
    answer.push(x);
    for(let i = 2; i < n+1; i++) {
        answer.push(x*i);
    }
    return answer;
}
