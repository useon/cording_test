function solution(n, lost, reserve) {
    let answer = 0;
    let lostStudent = lost;
    let count = 0;
    
    lostStudent = lost.filter((x) => !reserve.includes(x));
    reserve = reserve.filter((x) => !lost.includes(x));


    lostStudent.sort((a, b) => a-b);
    reserve.sort((a, b) => a-b);

        for(let j = 0; j < lostStudent.length; j++) {
            if(reserve.includes(lostStudent[j]-1)) {
                reserve.splice(reserve.indexOf(lostStudent[j]-1), 1);
                count++;
            } else {
                if(reserve.includes(lostStudent[j]+1)) {
                    reserve.splice(reserve.indexOf(lostStudent[j]+1), 1);
                    count++;
                }
            }
        }
    
    answer = n - lostStudent.length + count;
    return answer;
}
