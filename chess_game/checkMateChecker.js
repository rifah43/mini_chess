// const constant = require('./constant.js');
// const pieces_move = require('./moveFunction/pieces_move.js');
// const check_pieces = require('./moveFunction/check_pieces.js');

import * as constant from './constant.js';
import * as pieces_move from './moveFunction/pieces_move.js';
import * as check_pieces from './moveFunction/check_pieces.js';

function isItCheckMate(board, kingName) {
    if (kingName == constant.COMPUTER_KING) {
        if (pieces_move.getAllComputersMoves(board) == null) {
            console.log("Checkmate!!!");
            return true;
        }
        else {
            return false;
        }
    }
    else {
        let totalMoves = [];
        for (let y = 0; y < constant.BOARD_LENGTH; y++) {
            for (let x = 0; x < constant.BOARD_WIDTH; x++) {
                if (check_pieces.isPlayerPieces(board[y][x])) {
                    let temp = pieces_move.getAllMovesForA_Position(board,y,x)
                    if (temp != null) {
                        totalMoves = totalMoves.concat(temp);
                    }
                }
            }
        }

        if (totalMoves.length == 0) {
            console.log("Checkmate!!!");
            return true;
        }
        else {
            return false;
        }
    }
}

// module.exports = {
//     isItCheckMate
// }

export{
    isItCheckMate
}
