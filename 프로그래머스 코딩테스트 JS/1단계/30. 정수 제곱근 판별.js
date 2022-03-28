function solution(n) {
    const x = Math.sqrt(n);
    if(x === NaN || Number.isInteger(x) === false){
        return -1
    } else {
        return Math.pow((x+1), 2)
    }
}

//3
