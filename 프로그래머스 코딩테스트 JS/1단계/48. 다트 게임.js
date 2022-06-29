function solution(dartResult) {
    let answer = [];

    dartResult = dartResult.split('');
    
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] === '1') {
            if(dartResult[i+1] === '0') {
                dartResult[i] = '10';
                dartResult.splice(i+1, 1)
            }
        }
        
        if(dartResult[i] === 'S') {
            answer.push(dartResult[i-1] ** 1);
        }
        if(dartResult[i] === 'D') {
            answer.push(dartResult[i-1] ** 2);
        }
        if(dartResult[i] === 'T') {
            answer.push(dartResult[i-1] ** 3);
        }
        
        if(dartResult[i] === '*') {
            if(answer.length - 2 !== undefined) {
                answer[answer.length-1] *= 2;
                answer[answer.length-2] *= 2;
            } else {
                answer[answer.length-1] *= 2;
            }
        }
        if(dartResult[i] === '#') {
           if(answer.length - 2 !== undefined) {
                answer[answer.length-1] *= -1;
            } else {
                answer[answer.length-1] *= -1;
            }
           }
    }
    answer = answer.reduce((a, b) => a+b);
    return answer;
}
