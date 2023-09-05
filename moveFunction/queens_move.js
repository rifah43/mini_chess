// const constant = require('../constant.js');
// const rooks_moves = require('./rooks_move.js').move;
// const bishops_moves = require('./bishops_move.js').move;

import * as constant from '../constant.js';
import { move as rooks_moves } from './rooks_move.js';
import { move as bishops_moves } from './bishops_move.js';

function move(board, positionY, positionX) {
    try {
        let totalMoves = [];
        //checking for which  player we getting the moves
        if (board[positionY][positionX] == constant.COMPUTER_QUEEN){

            board[positionY][positionX] = constant.COMPUTER_BISHOP;
            totalMoves = bishops_moves(board, positionY, positionX);
            board[positionY][positionX] = constant.COMPUTER_ROOK;
            totalMoves = totalMoves.concat(rooks_moves(board, positionY, positionX))

            board[positionY][positionX] = constant.COMPUTER_QUEEN;
        }
        else if(board[positionY][positionX] == constant.PLAYER_QUEEN) {
            
            board[positionY][positionX] = constant.PLAYER_BISHOP;
            totalMoves = bishops_moves(board, positionY, positionX);
            board[positionY][positionX] = constant.PLAYER_ROOK;
            totalMoves = totalMoves.concat(rooks_moves(board, positionY, positionX))

            board[positionY][positionX] = constant.PLAYER_QUEEN;
        }
        else{
            console.log("In position [", positionY, ",", positionX, "] is not a Queen!!!");
            return null;
        }

        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

// module.exports = { move };
export { move };