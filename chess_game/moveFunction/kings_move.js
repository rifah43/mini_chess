// const check_pieces = require('./check_pieces.js');
// const constant = require('../constant.js');
// const kingsSafety = require('./kingsSafety.js')

import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';

function isOpositeKingIsNear(board, nextMoveY, nextMoveX, king) {
    let opositeKing;
    if (king == constant.COMPUTER_KING) opositeKing = constant.PLAYER_KING;
    else opositeKing = constant.COMPUTER_KING;

    if ((nextMoveX - 1 >= 0 && nextMoveY - 1 >= 0 && board[nextMoveY - 1][nextMoveX - 1] == opositeKing) ||
        (nextMoveY - 1 >= 0 && board[nextMoveY - 1][nextMoveX] == opositeKing) ||
        (nextMoveX + 1 < constant.BOARD_WIDTH && nextMoveY - 1 >= 0 && board[nextMoveY - 1][nextMoveX + 1] == opositeKing) ||
        (nextMoveX + 1 < constant.BOARD_WIDTH && board[nextMoveY][nextMoveX + 1] == opositeKing) ||
        (nextMoveX + 1 < constant.BOARD_WIDTH && nextMoveY + 1 < constant.BOARD_LENGTH && board[nextMoveY + 1][nextMoveX + 1] == opositeKing) ||
        (nextMoveY + 1 < constant.BOARD_LENGTH && board[nextMoveY + 1][nextMoveX] == opositeKing) ||
        (nextMoveX - 1 >= 0 && nextMoveY + 1 < constant.BOARD_LENGTH && board[nextMoveY + 1][nextMoveX - 1] == opositeKing) ||
        (nextMoveX - 1 >= 0 && board[nextMoveY][nextMoveX - 1] == opositeKing)
    ) return true;
    else
        return false;
}


function safeMove(totalMoves, board, currentPositionY, currentPositionX, nextMoveY, nextMoveX) {
    if (board[nextMoveY][nextMoveX] == null || check_pieces.isPlayerPieces(board[nextMoveY][nextMoveX])) {

        let king = board[currentPositionY][currentPositionX];

        if (!(isOpositeKingIsNear(board, nextMoveY, nextMoveX, king))) {
            let tempValue1 = board[currentPositionY][currentPositionX];
            let tempValue2 = board[nextMoveY][nextMoveX];
            board[nextMoveY][nextMoveX] = board[currentPositionY][currentPositionX];
            board[currentPositionY][currentPositionX] = null;

            let isSafe = !kingsSafety.isItCheck(board, king)[0];

            board[currentPositionY][currentPositionX] = tempValue1;
            board[nextMoveY][nextMoveX] = tempValue2;

            if (isSafe) {
                totalMoves.push({currentPosition: {y:currentPositionY, x: currentPositionX}, nextPosition: {y: nextMoveY, x:nextMoveX}});
            }
        }
    }
}


/* kings castiling move is not implemented as it is a minnichess
 if you want to make it 8x8 chessboard plz implement  this feature */
function move(board, positionY, positionX) {
    try {
        let totalMoves = [];
        if (board[positionY][positionX] != constant.COMPUTER_KING && board[positionY][positionX] != constant.PLAYER_KING) {
            console.log("There is no king in position [", currentPositionY, currentPositionX, "] !!!!!");
            return null;
        }

        let x = positionX, y = positionY;
        if (x - 1 >= 0 && y - 1 >= 0) safeMove(totalMoves, board, y, x, y - 1, x - 1);
        if (y - 1 >= 0) safeMove(totalMoves, board, y, x, y - 1, x);
        if (x + 1 < constant.BOARD_WIDTH && y - 1 >= 0) safeMove(totalMoves, board, y, x, y - 1, x + 1);
        if (x + 1 < constant.BOARD_WIDTH) safeMove(totalMoves, board, y, x, y, x + 1);

        if (x + 1 < constant.BOARD_WIDTH && y + 1 < constant.BOARD_LENGTH) safeMove(totalMoves, board, y, x, y + 1, x + 1);
        if (y + 1 < constant.BOARD_LENGTH) safeMove(totalMoves, board, y, x, y + 1, x);
        if (x - 1 >= 0 && y + 1 < constant.BOARD_LENGTH) safeMove(totalMoves, board, y, x, y + 1, x - 1);
        if (x - 1 >= 0) safeMove(totalMoves, board, y, x, y, x - 1);


        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

// module.exports = { move };
export { move };