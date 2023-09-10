// const evaluation = require('./evaluation.js');
// const constant = require('../constant.js');
// const pieces_move = require('../moveFunction/pieces_move.js')

import * as evaluation from './evaluation.js';
import * as constant from '../constant.js'
import * as pieces_move from '../moveFunction/pieces_move.js';


let MAX = 9999999;
let MIN = -9999999;

// assuming that computer want to maximize it's value

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function move_by_minimaxApproch(depth, board, maximizingPlayer) {
    if (depth == 0) {
        return [evaluation.evaluateBoard(board), null];
    }

    if (maximizingPlayer) {
        const allMovesArray = shuffle(pieces_move.getAllComputersMoves(board));
        if (allMovesArray == null) {
            // As it will be checkmate for the computer and it will lose the game
            return MIN;
        }

        let best = MIN;
        let finalMove = null;
        let length = allMovesArray.length;

        for (let i = 0; i < length; i++) {
            const temp = board.map(row => [...row]);
            const move = allMovesArray[i];

            // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.COMPUTER_PAWN && move.nextPosition.y == constant.BOARD_LENGTH - 1) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.COMPUTER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            let val = moveBy_alphaBetaPruningApproch(depth - 1, temp, !maximizingPlayer)[0];
            // best = Math.max(best, val);
            if (val > best) {
                best = val;
                finalMove = move;
            }
        }
        return [best, finalMove];
    }
    else {
        const allMovesArray = shuffle(pieces_move.getAllComputersMoves(board));
        if (allMovesArray == null) {
            // As it will be checkmate for the computer and it will lose the game
            return MIN;
        }

        let best = MAX;
        let finalMove = null;
        let length = allMovesArray.length;

        for (let i = 0; i < length; i++) {
            const temp = board.map(row => [...row]);
            const move = allMovesArray[i];

            // If Player Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.PLAYER_PAWN && move.nextPosition.y == 0) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.PLAYER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            let val = moveBy_alphaBetaPruningApproch(depth - 1, temp, !maximizingPlayer)[0];
            // best = Math.max(best, val);
            if (val < best) {
                best = val;
                finalMove = move;
            }
        }
        return [best, finalMove];
    }
}


function moveBy_alphaBetaPruningApproch(depth, board, maximizingPlayer, alpha, beta) {
    if (depth == 0) {
        return [evaluation.evaluateBoard(board), null];
    }

    if (maximizingPlayer) {
        const allMovesArray = shuffle(pieces_move.getAllComputersMoves(board));
        if (allMovesArray == null) {
            // As it will be checkmate for the computer and it will lose the game
            return MIN;
        }

        let best = MIN;
        let finalMove = null;
        let length = allMovesArray.length;

        for (let i = 0; i < length; i++) {
            const temp = board.map(row => [...row]);
            const move = allMovesArray[i];

            // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.COMPUTER_PAWN && move.nextPosition.y == constant.BOARD_LENGTH - 1) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.COMPUTER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            let val = moveBy_alphaBetaPruningApproch(depth - 1, temp, !maximizingPlayer, alpha, beta)[0];
            // best = Math.max(best, val);
            if (val > best) {
                best = val;
                finalMove = move;
            }
            alpha = Math.max(alpha, best);

            // Alpha Beta Pruning
            if (beta <= alpha) {
                break;
            }
        }
        return [best, finalMove];
    }
    else {
        const allMovesArray = shuffle(pieces_move.getAllComputersMoves(board));
        if (allMovesArray == null) {
            // As it will be checkmate for the computer and it will lose the game
            return MIN;
        }

        let best = MAX;
        let finalMove = null;
        let length = allMovesArray.length;

        for (let i = 0; i < length; i++) {
            const temp = board.map(row => [...row]);
            const move = allMovesArray[i];

            // If Player Pawon reached the last line of the opponent player, then it will replace with Queen
            if (board[move.currentPosition.y][move.currentPosition.x] == constant.PLAYER_PAWN && move.nextPosition.y == 0) {
                temp[move.nextPosition.y][move.nextPosition.x] = constant.PLAYER_QUEEN;
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }
            else {
                temp[move.nextPosition.y][move.nextPosition.x] = board[move.currentPosition.y][move.currentPosition.x];
                temp[move.currentPosition.y][move.currentPosition.x] = null;
            }

            let val = moveBy_alphaBetaPruningApproch(depth - 1, temp, !maximizingPlayer, alpha, beta)[0];
            // best = Math.max(best, val);
            if (val < best) {
                best = val;
                finalMove = move;
            }
            alpha = Math.min(alpha, best);

            // Alpha Beta Pruning
            if (beta <= alpha) {
                break;
            }
        }
        return [best, finalMove];
    }
}

function getAIMove(board) {
    // let startTime = performance.now();
    // console.log(move_by_minimaxApproch(6, board, true));
    // let endTime = performance.now();
    // console.log(`myFunction took ${endTime - startTime} milliseconds.`);
    // startTime = performance.now();
    // console.log(moveBy_alphaBetaPruningApproch(6, board, true, MIN, MAX));
    // endTime = performance.now();
    // console.log(`myFunction took ${endTime - startTime} milliseconds.`);

    // return move_by_minimaxApproch(constant.MAXIMUM_DEPTH, board, true)[1];
    return moveBy_alphaBetaPruningApproch(constant.MAXIMUM_DEPTH, board, true, MIN, MAX)[1];
}

// module.exports = {
//     getAIMove
// }

export {
    getAIMove
}