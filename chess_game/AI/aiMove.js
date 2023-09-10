const evaluation = require('./evaluation.js');
const constant = require('../constant.js');
const pieces_move = require('../moveFunction/pieces_move.js')
const Board = require('../board.js');

// assuming that computer want to maximize it's value

function move_by_minimaxApproch(depth, board, isMax) {
    if (depth == 0) {
        return [evaluation.evaluateBoard(board), null];
    }

    let value = null, tempValue = 0;
    let finalMove = null;

    if (isMax) {
        const allMovesArray = pieces_move.getAllComputersMoves(board);
        if (allMovesArray == null) {
            // As it will be checkmate for the computer and it will lose the game
            return -9999999;
        }

        value = -9999999;
        allMovesArray.forEach(move => {
            const temp = board.map(row => [...row]);

            // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.COMPUTER_PAWN && move.nextPosition.y == constant.BOARD_LENGTH - 1) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.COMPUTER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            tempValue = move_by_minimaxApproch(depth - 1, temp, !isMax)[0];
            if (tempValue > value) {
                value = tempValue;
                finalMove = move;
            }
        });
    }
    else if (!isMax) {
        const allMovesArray = pieces_move.getAllPlayersMoves(board);
        if (allMovesArray == null) {
            // As it will be checkmate for the player and s/he will lose the game
            return 9999999;
        }

        value = 9999999;
        allMovesArray.forEach(move => {
            const temp = board.map(row => [...row]);

            // If Player Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.PLAYER_PAWN && move.nextPosition.y == 0) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.PLAYER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            tempValue = move_by_minimaxApproch(depth - 1, temp, !isMax)[0];
            if (tempValue < value) {
                value = tempValue;
                finalMove = move;
            }
        });
    }

    return [value, finalMove];
}


function getAIMove(board) {
    return move_by_minimaxApproch(constant.MAXIMUM_DEPTH, board, true)[1];
}

module.exports = {
    getAIMove
}