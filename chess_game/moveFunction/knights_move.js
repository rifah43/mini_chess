// const check_pieces = require('./check_pieces.js');
// const constant = require('../constant.js');
// const kingsSafety = require('./kingsSafety.js');

import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';


function addMoves(board, positionY, positionX, nextMoveY, nextMoveX, check_piecesFunction) {
    if ((nextMoveX >= 0 && nextMoveX < constant.BOARD_WIDTH) &&
        (nextMoveY >= 0 && nextMoveY < constant.BOARD_LENGTH) &&
        (board[nextMoveY][nextMoveX] == null || check_piecesFunction(board[nextMoveY][nextMoveX]))) {

        if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, nextMoveY, nextMoveX)) {
            const temp = {currentPosition: {y:positionY, x: positionX}, nextPosition: {y: nextMoveY, x:nextMoveX}};
            return temp;
        }
        else return null
    }
    else return null;
}
function move(board, positionY, positionX) {
    try {
        let totalMoves = [];        //it will be like this [{current:{y:2, x:3]}, nextMove:{y:2, x:5]}}]
        let check_piecesFunction;

        //checking for which  player we getting the moves
        if (board[positionY][positionX] == constant.COMPUTER_KNIGHT){
            check_piecesFunction = check_pieces.isPlayerPieces;
        }
        else if(board[positionY][positionX] == constant.PLAYER_KNIGHT) {
            check_piecesFunction = check_pieces.isComputerPieces;
        }
        else{
            console.log("In position [", positionY, ",", positionX, "] is not a knight!!!");
            return null;
        }

        // checking move in left-upper side
        let temp = addMoves(board, positionY, positionX, positionY - 2, positionX - 1, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY - 1, positionX - 2, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);

        // checking move in right-upper side
        temp = addMoves(board, positionY, positionX, positionY - 2, positionX + 1, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY - 1, positionX + 2, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);

        // checking move in left-lower
        temp = addMoves(board, positionY, positionX, positionY + 2, positionX - 1, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY + 1, positionX - 2, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);

        // checking move in right-lower
        temp = addMoves(board, positionY, positionX, positionY + 2, positionX + 1, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY + 1, positionX + 2, check_piecesFunction);
        if (temp != null) totalMoves.push(temp);

        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

// module.exports = { move };
export { move };