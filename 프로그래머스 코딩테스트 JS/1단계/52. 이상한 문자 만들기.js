function solution(s) {
    let answer = '';
    let arr = []
    s = s.split(" ");
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
            if((j+1) % 2 === 0) {
                answer += s[i][j].toLowerCase();
            } else {
                answer += s[i][j].toUpperCase();
            }
        }
        arr.push(answer);
        answer = ''
    }
    answer = arr.join(" ");
    return answer;
}
