const constant = require('./constant.js');

function initialize(upperPlayerName) {
    try {
        let board;
        if (upperPlayerName === constant.PLAYER_UPPER) {
            // It's real
            board = [
                [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT],
                [constant.PLAYER_PAWN1, constant.PLAYER_PAWN2, constant.PLAYER_PAWN3, constant.PLAYER_PAWN4, constant.PLAYER_PAWN5],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [constant.COMPUTER_PAWN1, constant.COMPUTER_PAWN2, constant.COMPUTER_PAWN3, constant.COMPUTER_PAWN4, constant.COMPUTER_PAWN5],
                [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT]
            ];

            //for Demo checking
            // board = [
            //     [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT],
            //     [constant.PLAYER_PAWN1, constant.PLAYER_PAWN2, constant.COMPUTER_PAWN3, constant.PLAYER_PAWN4, constant.PLAYER_PAWN5],
            //     [null, null, null, null, null],
            //     [null, null, null, null, null],
            //     [constant.COMPUTER_PAWN1, constant.COMPUTER_PAWN2, null, constant.COMPUTER_PAWN4, constant.COMPUTER_PAWN5],
            //     [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT]
            // ];
        }
        else if (upperPlayerName === constant.COMPUTER_UPPER) {
            // It's real
            board = [
                [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT],
                [constant.COMPUTER_PAWN1, constant.COMPUTER_PAWN2, constant.COMPUTER_PAWN3, constant.COMPUTER_PAWN4, constant.COMPUTER_PAWN5],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [constant.PLAYER_PAWN1, constant.PLAYER_PAWN2, constant.PLAYER_PAWN3, constant.PLAYER_PAWN4, constant.PLAYER_PAWN5],
                [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT]
            ];

            //for Demo checking
            // board = [
            //     [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT],
            //     [constant.COMPUTER_PAWN1, constant.COMPUTER_PAWN2, null, constant.COMPUTER_PAWN4, constant.COMPUTER_PAWN5],
            //     [null, null, null, null, null],
            //     [null, null, null, null, null],
            //     [constant.PLAYER_PAWN1, constant.PLAYER_PAWN2, constant.COMPUTER_PAWN3, constant.PLAYER_PAWN4, constant.PLAYER_PAWN5],
            //     [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT]
            // ];
        }
        else {
            return null;
        }

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

        allBoardArray.forEach(board => {

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


module.exports = {
    printBoard,
    initialize,
    printAllBoards
};