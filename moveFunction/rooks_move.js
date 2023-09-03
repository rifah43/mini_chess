const check_pieces = require('./check_pieces.js');
const constant = require('../constant.js');
const kingsSafety = require('./kingsSafety.js');

// import * as check_pieces from './check_pieces.js';
// import * as constant from '../constant.js';
// import * as kingsSafety from './kingsSafety.js';

function move(board, positionY, positionX) {
    try {
        let totalMoves = [];
        if (board[positionY][positionX] != constant.COMPUTER_ROOK) {
            console.log("In position [", positionY, ",", positionX, "] is not a computer rook!!!");
            return null;
        }

        // checking move in rightside
        for (let i = positionX + 1; i < constant.BOARD_WIDTH; i++) {
            if (board[positionY][i] == null || check_pieces.isPlayerPieces(board[positionY][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY, i)) {
                    const temp = board.map(row => [...row]);
                    temp[positionY][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[positionY][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in leftside
        for (let i = positionX - 1; i >= 0; i--) {
            if (board[positionY][i] == null || check_pieces.isPlayerPieces(board[positionY][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY, i)) {
                    const temp = board.map(row => [...row]);
                    temp[positionY][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[positionY][i])) break; // no more left move
            }
            else {
                break;
            }
        }

        // checking move in upperside
        for (let i = positionY - 1; i >= 0; i--) {
            if (board[i][positionX] == null || check_pieces.isPlayerPieces(board[i][positionX])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, i, positionX)) {
                    const temp = board.map(row => [...row]);
                    temp[i][positionX] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[i][positionX])) break; // no more upper move
            }
            else {
                break;
            }
        }

        // checking move in lowerside
        for (let i = positionY + 1; i < constant.BOARD_LENGTH; i++) {
            if (board[i][positionX] == null || check_pieces.isPlayerPieces(board[i][positionX])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, i, positionX)) {
                    const temp = board.map(row => [...row]);
                    temp[i][positionX] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[i][positionX])) break; // no more upper move
            }
            else {
                break;
            }
        }

        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { move };
// export { move };