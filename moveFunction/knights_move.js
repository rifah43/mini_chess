import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';


function addMoves(board, positionY, positionX, nextMoveY, nextMoveX) { 
    if ((nextMoveX >= 0 && nextMoveX < constant.BOARD_WIDTH) &&
        (nextMoveY >= 0 && nextMoveY < constant.BOARD_LENGTH) &&
        (board[nextMoveY][nextMoveX] == null || check_pieces.isPlayerPieces(board[nextMoveY][nextMoveX]))) {

        const temp = board.map(row => [...row]);
        temp[nextMoveY][nextMoveX] = board[positionY][positionX];
        temp[positionY][positionX] = null;

        return temp;
    }
    else return null;
}
function move(board, positionY, positionX) {
    try {
        let totalMoves = [], nextMoveX, nextMoveY;
        if (board[positionY][positionX] != constant.COMPUTER_KNIGHT) {
            console.log("In position [", positionY, ",", positionX, "] is not a computer kinght!!!");
            return null;
        }

        // checking move in left-upper side
        let temp = addMoves(board, positionY, positionX, positionY - 2, positionX - 1);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY - 1, positionX - 2);
        if (temp != null) totalMoves.push(temp);

        // checking move in right-upper side
        temp = addMoves(board, positionY, positionX, positionY - 2, positionX + 1);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY - 1, positionX + 2);
        if (temp != null) totalMoves.push(temp);

        // checking move in left-lower
        temp = addMoves(board, positionY, positionX, positionY + 2, positionX - 1);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY + 1, positionX - 2);
        if (temp != null) totalMoves.push(temp);

        // checking move in right-lower
        temp = addMoves(board, positionY, positionX, positionY + 2, positionX + 1);
        if (temp != null) totalMoves.push(temp);
        temp = addMoves(board, positionY, positionX, positionY + 1, positionX + 2);
        if (temp != null) totalMoves.push(temp);

        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export { move };