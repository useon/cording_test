function solution(N, stages) {
    let answer = [];
    let obj = [];
    let stagesCount = 0;
    let reachedCount = 0;
    let failureRate = 0;

    for(let i = 1; i < N+1; i++) {
        for(let j = 0; j < stages.length; j++) {
            if(i === stages[j]) {
                stagesCount++;
            }
            if(i <= stages[j]) {
                reachedCount++;
            }
        }
            failureRate = stagesCount / reachedCount;
            obj.push({stageNum: i, failureRate: failureRate});
            stagesCount = 0;
            reachedCount = 0;
    }
    
    obj.sort((a, b) => b.failureRate - a.failureRate);
    obj.map((x) => answer.push(x.stageNum));

    return answer;
}
