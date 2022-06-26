function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let arr = [];
    let newBoard = [];

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            arr.push(board[j][i]);
        }
        newBoard.push(arr);
        arr = [];
    }
    
    newBoard = newBoard.map((x) => x.filter((item)=> item !== 0));
    
    for(let i = 0; i < moves.length; i++) {    
        if(basket[basket.length-1] === newBoard[moves[i]-1][0] && newBoard[moves[i]-1][0] !== undefined) {
                basket.pop();
                newBoard[moves[i]-1].shift();
                answer += 2;
        } else {
                if(newBoard[moves[i]-1].length !== 0) {
                    basket.push(newBoard[moves[i]-1][0]);
                    newBoard[moves[i]-1].shift();
                }
        }
    }
    return answer;
}
