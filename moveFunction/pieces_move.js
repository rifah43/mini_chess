// const pawns_moves = require('./pawns_move.js').move;
// const rooks_moves = require('./rooks_move.js').move;
// const bishops_moves = require('./bishops_move.js').move;
// const kings_moves = require('./kings_move.js').move;
// const knights_moves = require('./knights_move.js').move;
// const queens_moves = require('./queens_move.js').move;
// const constant = require('../constant.js');
// const check_pieces = require('./check_pieces.js')

import { move as pawns_moves } from './pawns_move.js';
import { move as rooks_moves } from './rooks_move.js';
import { move as bishops_moves } from './bishops_move.js';
import { move as kings_moves } from './kings_move.js';
import { move as knights_moves } from './knights_move.js';
import { move as queens_moves } from './queens_move.js';
import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';


function getAllComputersMove(board) {
    let totalMoves = [];

    for (let y = 0; y < constant.BOARD_LENGTH; y++) {
        for (let x = 0; x < constant.BOARD_WIDTH; x++) {
            if (check_pieces.isComputerPieces(board[y][x])) {
                if (board[y][x] == constant.COMPUTER_BISHOP) {
                    totalMoves = totalMoves.concat(bishops_moves(board, y, x));
                }
                else if (board[y][x] == constant.COMPUTER_ROOK) {
                    totalMoves = totalMoves.concat(rooks_moves(board, y, x));
                }
                else if (board[y][x] == constant.COMPUTER_KNIGHT) {
                    totalMoves = totalMoves.concat(knights_moves(board, y, x));
                }
                else if (board[y][x] == constant.COMPUTER_QUEEN) {
                    totalMoves = totalMoves.concat(queens_moves(board, y, x));
                }
                else if (board[y][x] == constant.COMPUTER_KING) {
                    totalMoves = totalMoves.concat(kings_moves(board, y, x));
                }
                else {
                    totalMoves = totalMoves.concat(pawns_moves(board, y, x));
                }
            }
        }
    }
    return totalMoves;
}

function getAllMoves(board, positionY, positionX) {
    if (board[positionY][positionX] ==  null) return null;
    else if (board[positionY][positionX] == constant.COMPUTER_BISHOP) {
        return bishops_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.COMPUTER_ROOK) {
        return rooks_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.COMPUTER_KNIGHT) {
        return knights_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.COMPUTER_QUEEN) {
        return queens_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.COMPUTER_KING) {
        return kings_moves(board, positionY, positionX);
    }
    else {
        return pawns_moves(board, positionY, positionX);
    }
}

// module.exports = {
//     pawns_moves,
//     rooks_moves,
//     bishops_moves,
//     kings_moves,
//     knights_moves,
//     queens_moves,
//     getAllComputersMove,
//     getAllMoves
// }

export{
    pawns_moves,
    rooks_moves,
    bishops_moves,
    kings_moves,
    knights_moves,
    queens_moves,
    getAllComputersMove,
    getAllMoves
}