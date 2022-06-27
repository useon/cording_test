function solution(n, arr1, arr2) {
    let answer = [];
    let line = '';
    
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i].toString(2);
        if(arr1[i].length < n) {
            for(let j = arr1[i].length; j < n; j++) {
                arr1[i] = '0' + arr1[i];
            }
        }
        
        arr2[i] = arr2[i].toString(2);
        if(arr2[i].length < n) {
            for(let j = arr2[i].length; j < n; j++) {
                arr2[i] = '0' + arr2[i];
            }
        }

        for(let k = 0; k < n; k++) {
            if(arr1[i][k] === arr2[i][k] && arr1[i][k] === '0') {
                line += " ";
            } else {
                line += "#";
            }
        }
        answer.push(line);
        line = '';
    }
    return answer;
}
