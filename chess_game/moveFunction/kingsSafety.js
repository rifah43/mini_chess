// const constant = require('../constant.js');
// const check_pieces = require('./check_pieces.js');
import * as constant from '../constant.js';
import * as check_pieces from './check_pieces.js';

function findKingsPosition(board, king) {
    let x, y;
    for (y = 0; y < constant.BOARD_LENGTH; y++) {
        for (x = 0; x < constant.BOARD_WIDTH; x++) {
            if (board[y][x] === king) return [y, x];
        }
    }
    return [null, null];
}

function isThisMoveSafeForKing(board, currentPositionY, currentPositionX, nextMoveY, nextMoveX) {

    let y, x;
    let queen, rook, bishop;
    //checking for which  player we getting the moves
    if (check_pieces.isComputerPieces(board[currentPositionY][currentPositionX])) {
        [y, x] = findKingsPosition(board, constant.COMPUTER_KING);
        queen = constant.PLAYER_QUEEN;
        rook = constant.PLAYER_ROOK;
        bishop = constant.PLAYER_BISHOP;
    }
    else if (check_pieces.isPlayerPieces(board[currentPositionY][currentPositionX])) {
        [y, x] = findKingsPosition(board, constant.PLAYER_KING);
        queen = constant.COMPUTER_QUEEN;
        rook = constant.COMPUTER_ROOK;
        bishop = constant.COMPUTER_BISHOP;
    }
    else {
        console.log("There is no piece in position [", positionY, ",", positionX, "]");
        return null;
    }



    // Checking that king and the pieces are in same diagonal
    if (Math.abs(y - currentPositionY) == Math.abs(currentPositionX - x)) {
        // check that next move is also diagonal ? if then move is safe for king
        if (Math.abs(nextMoveY - y) == Math.abs(x - nextMoveX)) {
            return true;
        }

        // if king stay in left-lower
        if (y > currentPositionY && x < currentPositionX) {
            for (let i = x + 1, j = y - 1; i < constant.BOARD_WIDTH && j >= 0; i++, j--) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == bishop || board[j][i] == queen) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        // if king stay in left-upper
        if (y < currentPositionY && x < currentPositionX) {
            for (let i = x + 1, j = y + 1; i < constant.BOARD_WIDTH && j < constant.BOARD_LENGTH; i++, j++) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == bishop || board[j][i] == queen) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        // if king stay in right-upper
        if (y < currentPositionY && x > currentPositionX) {
            for (let i = x - 1, j = y + 1; i >= 0 && j < constant.BOARD_LENGTH; i--, j++) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == bishop || board[j][i] == queen) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        // if king stay in right-lower
        if (y > currentPositionY && x > currentPositionX) {
            for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == bishop || board[j][i] == queen) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        return true;
    }

    // Checking that king and the pieces are in same row or column
    else if (y == currentPositionY || currentPositionX == x) {
        // if the pieces and the king stay in same row
        if (y == currentPositionY) {
            // check that next move is also in vertical ? if then move is safe for king
            if (currentPositionY == nextMoveY) {
                return true;
            }

            // if king stay in right-side
            if (x > currentPositionX) {
                for (let i = x - 1; i >= 0; i--) {
                    if (i == currentPositionX || board[y][i] == null) continue;
                    else if (board[y][i] == rook || board[y][i] == queen) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            // if king stay in left-side
            else {
                for (let i = x + 1; i < constant.BOARD_WIDTH; i++) {
                    if (i == currentPositionX || board[y][i] == null) continue;
                    else if (board[y][i] == rook || board[y][i] == queen) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        }
        // if the pieces and the king stay in same column
        else {
            // check that next move is also in vertical ? if then move is safe for king
            if (currentPositionX == nextMoveX) {
                return true;
            }


            // if king stay in lower-side
            if (y > currentPositionY) {
                for (let j = y - 1; j >= 0; j--) {
                    if (j == currentPositionY || board[j][x] == null) continue;
                    else if (board[j][x] == rook || board[j][x] == queen) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            // if king stay in upper-side
            else {
                for (let j = y + 1; j < constant.BOARD_LENGTH; j++) {
                    if (j == currentPositionY || board[j][x] == null) continue;
                    else if (board[j][x] == rook || board[j][x] == queen) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        }
    }
    // the move does not affect in king's safty
    return true;
}



function isItCheck(board, kingName) {
    let kingsPosition = findKingsPosition(board, kingName);
    let checkingPices = null;
    let isItCheck = false;
    let attackedBy = [];

    if (kingName == constant.COMPUTER_KING) {
        checkingPices = {
            rook: constant.PLAYER_ROOK,
            queen: constant.PLAYER_QUEEN,
            khight: constant.PLAYER_KNIGHT,
            bishop: constant.PLAYER_BISHOP,
            pawn: constant.PLAYER_PAWN
        }
    }
    else if (kingName == constant.PLAYER_KING) {
        checkingPices = {
            rook: constant.COMPUTER_ROOK,
            queen: constant.COMPUTER_QUEEN,
            khight: constant.COMPUTER_KNIGHT,
            bishop: constant.COMPUTER_BISHOP,
            pawn: constant.COMPUTER_PAWN
        }
    }
    else {
        console.log("Invalid king's type!!! it should be (constant.COMPUTER_KING/PLAYER_KING)");
        return null;
    }


    isItCheck = isItCheckBy_Vertical_Horizontal(board, kingsPosition, attackedBy, checkingPices) || isItCheck;
    isItCheck = isItCheckBy_Diagonaly(board, kingsPosition, attackedBy, checkingPices) || isItCheck;
    isItCheck = isItCheckByKnight(board, kingsPosition, attackedBy, checkingPices) || isItCheck;

    return [isItCheck, attackedBy];

}

function isItCheckBy_Diagonaly(board, kingsPosition, attackedBy, checkingPices) {
    let isItCheck = false;
    let [queen, bishop, pawn] = [checkingPices.queen, checkingPices.bishop, checkingPices.pawn];
    let [y, x] = [kingsPosition[0], kingsPosition[1]];

    // checking left-lower
    for (let i = x - 1, j = y + 1; i >= 0 && j < constant.BOARD_LENGTH; i--, j++) {
        if (board[j][i] == null) continue;
        if ((i == x - 1) && (queen == constant.PLAYER_QUEEN)) {
            if (pawn == board[j][i]) {
                isItCheck = true;
                attackedBy.push([j, i]);
            }
        }
        if (board[j][i] == bishop || board[j][i] == queen) {
            isItCheck = true;
            attackedBy.push([j, i]);
        }
        else {
            break;
        }
    }
    // checking right-lower
    for (let i = x + 1, j = y + 1; i < constant.BOARD_WIDTH && j < constant.BOARD_LENGTH; i++, j++) {
        if (board[j][i] == null) continue;
        if ((i == x + 1) && (queen == constant.PLAYER_QUEEN)) {
            if (board[j][i] == pawn) {
                isItCheck = true;
                attackedBy.push([j, i]);
            }
        }
        if (board[j][i] == bishop || board[j][i] == queen) {
            isItCheck = true;
            attackedBy.push([j, i]);
        }
        else {
            break;
        }
    }
    // checking left-upper
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[j][i] == null) continue;
        if ((i == x - 1) && (queen == constant.COMPUTER_QUEEN)) {
            if (pawn == board[j][i]) {
                isItCheck = true;
                attackedBy.push([j, i]);
            }
        }
        if (board[j][i] == bishop || board[j][i] == queen) {
            isItCheck = true;
            attackedBy.push([j, i]);
        }
        else {
            break;
        }
    }
    // checking right-upper
    for (let i = x + 1, j = y - 1; i < constant.BOARD_WIDTH && j >= 0; i++, j--) {
        if (board[j][i] == null) continue;

        if ((i == x + 1) && (queen == constant.COMPUTER_QUEEN)) {
            if (board[j][i] == pawn) {
                isItCheck = true;
                attackedBy.push([j, i]);
            }
        }

        if ((board[j][i] == bishop) || (board[j][i] == queen)) {
            isItCheck = true;
            attackedBy.push([j, i]);
        }
        else {
            break;
        }
    }
    return isItCheck;
}

function isItCheckBy_Vertical_Horizontal(board, kingsPosition, attackedBy, checkingPices) {
    let isItCheck = false;
    let [rook, queen] = [checkingPices.rook, checkingPices.queen];
    let [y, x] = [kingsPosition[0], kingsPosition[1]];

    // checking upper side
    for (let i = y - 1; i >= 0; i--) {
        if (board[i][x] == null) continue;
        if (board[i][x] == rook || board[i][x] == queen) {
            isItCheck = true;
            attackedBy.push([i, x]);
        }
        else {
            break;
        }
    }
    // checking lower side
    for (let i = y + 1; i < constant.BOARD_LENGTH; i++) {
        if (board[i][x] == null) continue;
        if (board[i][x] == rook || board[i][x] == queen) {
            isItCheck = true;
            attackedBy.push([i, x]);
        }
        else {
            break;
        }
    }
    // checking right side
    for (let i = x + 1; i < constant.BOARD_WIDTH; i++) {
        // console.log(board[y][i]);
        if (board[y][i] == null) continue;
        if (board[y][i] == rook || board[y][i] == queen) {
            isItCheck = true;
            attackedBy.push([y, i]);
        }
        else {
            break;
        }
    }
    // checking left side
    for (let i = x - 1; i >= 0; i--) {
        if (board[y][i] == null) continue;
        if (board[y][i] == rook || board[y][i] == queen) {
            isItCheck = true;
            attackedBy.push([y, i]);
        }
        else {
            break;
        }
    }

    return isItCheck;
}

function isItCheckByKnight(board, kingsPosition, attackedBy, checkingPices) {
    let isItCheck = false;
    let [khight] = [checkingPices.khight];
    let [y, x] = [kingsPosition[0], kingsPosition[1]];

    // Checking that is king attacked by Khight
    if ((y - 2 >= 0 && x - 1 >= 0) &&
        board[y - 2][x - 1] == khight) {

        isItCheck = true;
        attackedBy.push([y - 2, x - 1]);
    }
    if ((y - 1 >= 0 && x - 2 >= 0) &&
        board[y - 1][x - 2] == khight) {

        isItCheck = true;
        attackedBy.push([y - 1, x - 2]);
    }
    if ((y + 1 < constant.BOARD_LENGTH && x - 2 >= 0) &&
        board[y + 1][x - 2] == khight) {

        isItCheck = true;
        attackedBy.push([y + 1, x - 2]);
    }
    if ((y + 2 < constant.BOARD_LENGTH && x - 1 >= 0) &&
        board[y + 2][x - 1] == khight) {

        isItCheck = true;
        attackedBy.push([y + 2, x - 1]);
    }

    if ((y + 2 < constant.BOARD_LENGTH && x + 1 < constant.BOARD_WIDTH) &&
        board[y + 2][x + 1] == khight) {

        isItCheck = true;
        attackedBy.push([y + 2, x + 1]);
    }
    if ((y + 1 < constant.BOARD_LENGTH && x + 2 < constant.BOARD_WIDTH) &&
        board[y + 1][x + 2] == khight) {

        isItCheck = true;
        attackedBy.push([y + 1, x + 2]);
    }
    if ((y - 1 >= 0 && x + 2 < constant.BOARD_WIDTH) &&
        board[y - 1][x + 2] == khight) {

        isItCheck = true;
        attackedBy.push([y - 1, x + 2]);
    }
    if ((y - 2 >= 0 && x + 1 < constant.BOARD_WIDTH) &&
        board[y - 2][x + 1] == khight) {

        isItCheck = true;
        attackedBy.push([y - 2, x + 1]);
    }
    return isItCheck;
}


// module.exports = { isThisMoveSafeForKing, isItCheck};
export { isThisMoveSafeForKing, isItCheck };