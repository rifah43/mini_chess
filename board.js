import * as constant from './constant.js';
function initialize() {
    try {
        let board; 
        // It's real
        // board = [
        //     [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT],
        //     [constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN],
        //     [null, null, null, null, null],
        //     [null, null, null, null, null],
        //     [constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN],
        //     [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT]
        // ];

        //for Demo checking
        board = [
            [null, null, null, null, null],
            [null, null, constant.PLAYER_KING, null, null],
            [null, null, null, null, null],
            [null, null, constant.COMPUTER_KING, null, null],
            [null, null, null, null, null],
            [null, constant.PLAYER_ROOK, null, null, constant.PLAYER_KNIGHT],
        ];

        return board;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function printBoard(board) {
    try {
        const x = "null";
        for (let i = 0; i < constant.BOARD_LENGTH; i++) {
            let line = '';
            for (let j = 0; j < constant.BOARD_WIDTH; j++) {
                if (board[i][j] == null) {
                    line = line + x.padEnd(10, " ");
                }
                else {
                    line = line + String(board[i][j]).padEnd(10, " ");
                }
            }
            console.log(line);
        }
        console.log();
        return 1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}


function printAllBoards(allBoardArray) {
    try {
        if (allBoardArray == null) return 0;

        let numberOfMoves = 0;
        allBoardArray.forEach(board => {
            console.log("Move No= ", ++numberOfMoves);
            const x = "null";
            for (let i = 0; i < constant.BOARD_LENGTH; i++) {
                let line = '';
                for (let j = 0; j < constant.BOARD_WIDTH; j++) {
                    if (board[i][j] == null) {
                        line = line + x.padEnd(10, " ");
                    }
                    else {
                        line = line + String(board[i][j]).padEnd(10, " ");
                    }
                }
                console.log(line);
            }
            console.log();
            return 1;
        });
    } catch (error) {
        console.log(error);
        return -1;
    }
}

export {
    printBoard,
    initialize,
    printAllBoards
};