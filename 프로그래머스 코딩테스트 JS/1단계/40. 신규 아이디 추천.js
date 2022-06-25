function solution(new_id) {
    var answer = new_id;
    answer = answer
        .toLocaleLowerCase()
        .replace(/[^\.\-\_0-9a-z]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');
    console.log(answer.length)
    if(answer.length === 0) {
        answer = "a"
    }
    if(answer.length > 15) {
        answer = answer.split("", 15).join('').replace(/\.$/, '');
    }
    if(answer.length < 3) {
        for(let i = answer.length; i < 3; i++) {
            answer += answer[answer.length-1];
        }
    }
    return answer;
}
