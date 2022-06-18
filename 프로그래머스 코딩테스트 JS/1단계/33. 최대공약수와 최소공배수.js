function solution(n, m) {
    let firstNum;
    let secondNum;
    let remainder;
    let gcdLcmArr = [];
    if(n >= m) {
        firstNum = n;
        secondNum = m;
    } else {
        firstNum = m;
        secondNum = n;
    }
    while(secondNum !== 0) {
        remainder = firstNum % secondNum;
        firstNum = secondNum;
        secondNum = remainder;
    }
    gcdLcmArr.push(firstNum);
    let min = Math.floor((n * m) / firstNum);
    gcdLcmArr.push(min);
    return gcdLcmArr;
}
