function solution(strings, n) {
    let answer = [];
    let arr = [];
    for(let i = 0; i < strings.length; i++) {
        arr.push({string: strings[i][n], word: strings[i]});
    }
    arr.sort((a, b) => {
        if(a.string < b.string) {
            return -1;
        }
        if(a.string > b.string) {
            return 1;
        }
        if(a.string === b.string) {
            if(a.word > b.word) {
                return 1;
            }
            if(a.word < b.word) {
                return -1
            }
        }
    })
    arr.map((x) => answer.push(x.word));
    return answer;
}
