// const constant = require('../constant');
// const check_pieces = require('./check_pieces.js')
// const kingsSafety = require('./kingsSafety.js');

import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';


function move(board, positionY, positionX) {
    try {
        let totalMoves = [];        //it will be like this [{current:{y:2, x:3]}, nextMove:{y:2, x:5]}}]
        let pawnName;
        if (check_pieces.isComputerPawn(board[positionY][positionX])) {
            pawnName = "computersPawn";
        }
        else if (check_pieces.isPlayerPawn(board[positionY][positionX])) {
            pawnName = "playersPawn";
        }
        else {
            console.log("In position [", positionY, ",", positionX, "] is not a pawn!!!");
            return null;
        }


        if (pawnName == "computersPawn") {
            // // Double forwoed move for first time
            // if (positionY == 1 && board[positionY + 1][positionX] == null && board[positionY + 2][positionX] == null) {
            //     if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY + 2, positionX)) {
            //         totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY + 2, x: positionX } });
            //     }
            // }
            // Checking forword move
            // console.log("Hello", positionY+1,  positionX);
            if(positionY=== constant.BOARD_LENGTH-1){
                //choose pawn to queen or bishop or rook or knight
                console.log("Choose pawn to queen or bishop or rook or knight");

            }
            
            if (positionY + 1 < constant.BOARD_LENGTH && board[positionY + 1][positionX] == null) {
                // console.log("Hello2");
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY + 1, positionX)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY + 1, x: positionX } });
                }
            }

            // Checking diagonally forward move
            if (positionX > 0 && positionY + 1 < constant.BOARD_LENGTH && check_pieces.isPlayerPieces(board[positionY + 1][positionX - 1])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY + 1, positionX - 1)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY + 1, x: positionX - 1 } });
                }
            }
            if (positionX + 1 < constant.BOARD_WIDTH && positionY + 1 < constant.BOARD_LENGTH && check_pieces.isPlayerPieces(board[positionY + 1][positionX + 1])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY + 1, positionX + 1)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY + 1, x: positionX + 1 } });
                }
            }

        }

        // if (pawnName == "playersPawn")
        else {
            // // Double forwoed move for first time
            // if (positionY == constant.BOARD_LENGTH - 2 && board[positionY - 1][positionX] == null && board[positionY - 2][positionX] == null) {
            //     if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY - 2, positionX)) {
            //         totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY - 2, x: positionX } });
            //     }
            // }

            // Checking forword move
            if(positionY=== 0){
                //choose pawn to queen or bishop or rook or knight
                console.log("Choose pawn to queen or bishop or rook or knight");
                board[positionY][positionX] = constant.PLAYER_QUEEN;
                console.log(board);
            }

            else if (board[positionY - 1][positionX] == null) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY - 1, positionX)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY - 1, x: positionX } });
                }
            }

            // Checking diagonally forward move
            if (positionX > 0 && positionY > 0 && check_pieces.isComputerPieces(board[positionY - 1][positionX - 1])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY - 1, positionX - 1)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY - 1, x: positionX - 1 } });
                }
            }
            if (positionX + 1 < constant.BOARD_WIDTH && positionY > 0 && check_pieces.isComputerPieces(board[positionY - 1][positionX + 1])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, positionY - 1, positionX + 1)) {
                    totalMoves.push({ currentPosition: { y: positionY, x: positionX }, nextPosition: { y: positionY - 1, x: positionX + 1 } });
                }
            }
        }
        return totalMoves;
    }

    catch (error) {
        console.log(error);
        return null;
    }
}


// module.exports = {move}
export { move }