function solution(numbers, hand) {
    let answer = [];
    const coordinates = {
        '*': [[0, 0], "L"],
        '0': [[1, 0], "OR"],
        '#': [[2, 0], "R"],
        '7': [[0, 1], "L"],
        '8': [[1, 1], "OR"],
        '9': [[2, 1], "R"],
        '4': [[0, 2], "L"],
        '5': [[1, 2], "OR"],
        '6': [[2, 2], "R"],
        '1': [[0, 3], "L"],
        '2': [[1, 3], "OR"],
        '3': [[2, 3], "R"],
    };
    
    for(let i = 0; i < numbers.length; i++) {
        if(coordinates[numbers[i]][1] !== "OR") {
            answer.push(coordinates[numbers[i]][1]);
        } else {
            const leftIndex = answer.lastIndexOf("L");
            const rightIndex = answer.lastIndexOf("R");
            let leftCoordinates;
            let rightCoordinates;
            const nowCoordinates = coordinates[numbers[i]][0];

            if(leftIndex === -1) {
                leftCoordinates = coordinates['*'][0];
            } else {
                leftCoordinates = coordinates[numbers[leftIndex]][0];
            }
            if(rightIndex === -1) {
                rightCoordinates = coordinates['#'][0];
               } else {
                   rightCoordinates = coordinates[numbers[rightIndex]][0];
            }
            
            const leftDistance = [Math.abs(nowCoordinates[0] - leftCoordinates[0]) + Math.abs(nowCoordinates[1] - leftCoordinates[1])];
            const rightDistance = [Math.abs(nowCoordinates[0] - rightCoordinates[0]) + Math.abs(nowCoordinates[1] - rightCoordinates[1])];

            if(leftDistance > rightDistance) {
                answer.push("R");
            } else if(leftDistance < rightDistance) {
                answer.push("L");
            } else {
                if(hand === "right") {
                    answer.push("R");
                } else {
                    answer.push("L");
                }
            }
            
        }
        
    }
    
    answer = answer.join("")
    return answer;
}
