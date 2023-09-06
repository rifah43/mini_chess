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
        if (board[positionY][positionX] == constant.COMPUTER_ROOK){
            check_piecesFunction = check_pieces.isPlayerPieces;
        }
        else if(board[positionY][positionX] == constant.PLAYER_ROOK) {
            check_piecesFunction = check_pieces.isComputerPieces;
        }
        else{
            console.log("In position [", positionY, ",", positionX, "] is not a rook!!!");
            return null;
        }



        // checking move in rightside
        for (let i = positionX + 1; i < constant.BOARD_WIDTH; i++) {
            if (board[positionY][i] == null || check_piecesFunction(board[positionY][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY, i)) {
                    totalMoves.push({currentPosition: {y:positionY, x: positionX}, nextPosition: {y: positionY, x:i}});
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[positionY][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in leftside
        for (let i = positionX - 1; i >= 0; i--) {
            if (board[positionY][i] == null || check_piecesFunction(board[positionY][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY, i)) {
                    totalMoves.push({currentPosition: {y:positionY, x: positionX}, nextPosition: {y: positionY, x:i}});
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[positionY][i])) break; // no more left move
            }
            else {
                break;
            }
        }

        // checking move in upperside
        for (let i = positionY - 1; i >= 0; i--) {
            if (board[i][positionX] == null || check_piecesFunction(board[i][positionX])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, i, positionX)) {
                    totalMoves.push({currentPosition: {y:positionY, x: positionX}, nextPosition: {y: i, x:positionX}});
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[i][positionX])) break; // no more upper move
            }
            else {
                break;
            }
        }

        // checking move in lowerside
        for (let i = positionY + 1; i < constant.BOARD_LENGTH; i++) {
            if (board[i][positionX] == null || check_piecesFunction(board[i][positionX])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, i, positionX)) {
                    totalMoves.push({currentPosition: {y:positionY, x: positionX}, nextPosition: {y: i, x:positionX}});
                }
                else {
                    break;
                }

                if (check_piecesFunction(board[i][positionX])) break; // no more upper move
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