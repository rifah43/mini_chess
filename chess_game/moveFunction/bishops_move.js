// const check_pieces = require('./check_pieces.js');
// const constant = require('../constant.js');
// const kingsSafety = require('./kingsSafety.js');

import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';

function move(board, positionY, positionX) {
    try {
        let totalMoves = [];        //it will be like this [{current:{y:2, x:3]}, nextMove:{y:2, x:5]}}]
        let check_piecesFunction;


        //checking for which  player we getting the moves
        if (board[positionY][positionX] == constant.COMPUTER_BISHOP) {
            check_piecesFunction = check_pieces.isPlayerPieces;
        }
        else if (board[positionY][positionX] == constant.PLAYER_BISHOP) {
            check_piecesFunction = check_pieces.isComputerPieces;
        }
        else {
            console.log("In position [", positionY, ",", positionX, "] is not a bishop!!!");
            return null;
        }

        // checking move in right-upper side
        for (let i = positionX + 1, j = positionY - 1; i < constant.BOARD_WIDTH && j >= 0; i++, j--) {
            if (board[j][i] == null || check_piecesFunction(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: j, x: i } });
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in left-upper side
        for (let i = positionX - 1, j = positionY - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[j][i] == null || check_piecesFunction(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: j, x: i } });
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }


        // checking move in left-lower
        for (let i = positionX - 1, j = positionY + 1; i >= 0 && j < constant.BOARD_LENGTH; i--, j++) {
            if (board[j][i] == null || check_piecesFunction(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: j, x: i } });
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in right-lower
        for (let i = positionX + 1, j = positionY + 1; i < constant.BOARD_WIDTH && j < constant.BOARD_LENGTH; i++, j++) {
            if (board[j][i] == null || check_piecesFunction(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: j, x: i } });
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[j][i])) break; // no more right move
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

// module.exports = { move };
export { move };