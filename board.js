const constant = require('./constant.js');

function initialize() {
    try {
        let board = [
            [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT],
            [constant.PLAYER_PAWN1, constant.PLAYER_PAWN2, constant.PLAYER_PAWN3, constant.PLAYER_PAWN4, constant.PLAYER_PAWN5],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [constant.COMPUTER_PAWN1, constant.COMPUTER_PAWN2, constant.COMPUTER_PAWN3, constant.COMPUTER_PAWN4, constant.COMPUTER_PAWN5],
            [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT]
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
                    line = line + board[i][j].padEnd(10, " ");
                }
            }
            console.log(line);
        }
        return 1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}


module.exports = {
    printBoard,
    initialize
};