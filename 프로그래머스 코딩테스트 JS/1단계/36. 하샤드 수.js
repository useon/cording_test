function solution(x) {
    let sum = String(x).split('').map((x) => +x).reduce((a, b) => a+b);
    if(x % sum === 0) {
        return true;
    } else {
        return false;
    }
}
