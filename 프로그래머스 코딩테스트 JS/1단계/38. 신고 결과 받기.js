function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0);
    const reportList = {};
    id_list.map((user) => {
        reportList[user] = [];
    })
  
    report.map((user) => {
        const [userId, reportId] = user.split(' ');
        if(!reportList[reportId].includes(userId)) {
            reportList[reportId].push(userId);
        }
    })
  
    for(let key in reportList) {
        if(reportList[key].length >= k) {
            reportList[key].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }
    return answer
}
