function solution(n) {
    let answer = 0;
    let isPrime = true;
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime === true) {
            answer++;
        }
        isPrime = true;
    }
    return answer;
}
