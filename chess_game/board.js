// const constant = require('./constant.js');
// const check_pieces = require('./moveFunction/check_pieces.js')
import * as constant from './constant.js';
import * as check_pieces from './moveFunction/check_pieces.js'

function initialize() {
    try {
        let board;
        // It's real
        board = [
            [constant.COMPUTER_ROOK, constant.COMPUTER_BISHOP, constant.COMPUTER_KING, constant.COMPUTER_QUEEN, constant.COMPUTER_KNIGHT],
            [constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN],
            [constant.PLAYER_ROOK, constant.PLAYER_BISHOP, constant.PLAYER_KING, constant.PLAYER_QUEEN, constant.PLAYER_KNIGHT]
        ];

        //for Demo checking
        // board = [
        //     [null, null, null, null, null],
        //     [constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN, constant.COMPUTER_PAWN],
        //     [null, null, null, null, null],
        //     [null, null, null, null, null],
        //     [constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN, constant.PLAYER_PAWN],
        //     [null, null, null, null, null]
        // ];

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


function printAllMoves(board, allMovesArray) {
    try {
        if (allMovesArray == null) {
            console.log("null array!!!");
            return 0;
        }

        let numberOfMoves = 0;
        allMovesArray.forEach(move => {
            console.log("Move No= ", ++numberOfMoves);
            console.log(move);

            const temp = board.map(row => [...row]);

            // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen
            if (check_pieces.isComputerPawn(board[move.currentPosition.y][move.currentPosition.x]) && move.nextPosition.y == constant.BOARD_LENGTH - 1) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.COMPUTER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else if (check_pieces.isPlayerPawn(board[move.currentPosition.y][move.currentPosition.x]) && move.nextPosition.y == 0) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.PLAYER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            if (printBoard(temp) == -1) {
                return -1;
            }
        });
    } catch (error) {
        console.log(error);
        return -1;
    }
}


// module.exports = {
//     printBoard,
//     initialize,
//     printAllMoves
// };

export{
    printBoard,
    initialize,
    printAllMoves
};