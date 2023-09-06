// const pawns_moves = require('./pawns_move.js').move;
// const rooks_moves = require('./rooks_move.js').move;
// const bishops_moves = require('./bishops_move.js').move;
// const kings_moves = require('./kings_move.js').move;
// const knights_moves = require('./knights_move.js').move;
// const queens_moves = require('./queens_move.js').move;
// const constant = require('../constant.js');
// const check_pieces = require('./check_pieces.js');
// const kingsSafety = require('./kingsSafety.js');

import { move as pawns_moves } from './pawns_move.js';
import { move as rooks_moves } from './rooks_move.js';
import { move as bishops_moves } from './bishops_move.js';
import { move as kings_moves } from './kings_move.js';
import { move as knights_moves } from './knights_move.js';
import { move as queens_moves } from './queens_move.js';
import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';

function checkRemoverMoves(board, kingsName, totalMoves) {
    let totalValidMoves = [];

    totalMoves.forEach(move => {
        const temp = board.map(row => [...row]);
        temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
        temp[move.currentPosition.y][move.currentPosition.x] = null;

        if (!kingsSafety.isItCheck(temp, kingsName)[0]) {
            totalValidMoves.push(move);
        }
    });

    if (totalValidMoves.length == 0) {
        return null;
    }
    else {
        return totalValidMoves;
    }

}

function getAllComputersMoves(board) {
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

    if(totalMoves.length == 0){
        return null;
    }
    else if (kingsSafety.isItCheck(board, constant.COMPUTER_KING)[0]) {
        return checkRemoverMoves(board, constant.COMPUTER_KING, totalMoves);
    }
    else {
        return totalMoves;
    }
}


function getAllMovesForA_Position(board, positionY, positionX) {
    let totalMoves = [];
    if (board[positionY][positionX] == null) return null;
    else if (board[positionY][positionX] == constant.PLAYER_BISHOP) {
        totalMoves =  bishops_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.PLAYER_ROOK) {
        totalMoves = rooks_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.PLAYER_KNIGHT) {
        totalMoves = knights_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.PLAYER_QUEEN) {
        totalMoves = queens_moves(board, positionY, positionX);
    }
    else if (board[positionY][positionX] == constant.PLAYER_KING) {
        totalMoves = kings_moves(board, positionY, positionX);
    }
    else {
        totalMoves = pawns_moves(board, positionY, positionX);
    }

    if(totalMoves.length == 0){
        null;
    }
    else if (kingsSafety.isItCheck(board, constant.PLAYER_KING)[0]) {
        return checkRemoverMoves(board, constant.PLAYER_KING, totalMoves);
    }
    else {
        totalMoves;
    }
}

// module.exports = {
//     getAllComputersMoves,
//     getAllMovesForA_Position
// }

export{
    getAllComputersMoves,
    getAllMovesForA_Position
}