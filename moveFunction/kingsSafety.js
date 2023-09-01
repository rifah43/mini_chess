import * as constant from '../constant.js';
import * as check_pieces from './check_pieces.js';

function findKingsPosition(board, king) {
    let x, y;
    for (y = 0; y < constant.BOARD_LENGTH; y++) {
        for (x = 0; x < constant.BOARD_WIDTH; x++) {
            if (board[y][x] === king) return [y, x];
        }
    }
}

function isThisMoveSafeForKing(board, currentPositionY, currentPositionX, nextMoveY, nextMoveX) {
    let [y, x] = findKingsPosition(board, constant.COMPUTER_KING);

    // Checking that king and the pieces are in same diagonal
    if (Math.abs(y - currentPositionY) == Math.abs(currentPositionX - x)) {
        // check that next move is also diagonal ? if then move is safe for king
        if (Math.abs(nextMoveY - y) == Math.abs(x - nextMoveX)) {
            console.log("true1")
            return true;
        }

        // if king stay in left-lower
        if (y > currentPositionY && x < currentPositionX) {
            for (let i = x + 1, j = y - 1; i < constant.BOARD_WIDTH && j >= 0; i++, j--) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == constant.PLAYER_BISHOP || board[j][i] == constant.PLAYER_QUEEN) {
                    console.log("false1")
                    return false;
                }
                else {
                    console.log("true2")
                    return true;
                }
            }
        }
        // if king stay in left-upper
        if (y < currentPositionY && x < currentPositionX) {
            for (let i = x + 1, j = y + 1; i < constant.BOARD_WIDTH && j < constant.BOARD_LENGTH; i++, j++) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == constant.PLAYER_BISHOP || board[j][i] == constant.PLAYER_QUEEN) {
                    console.log("false2")
                    return false;
                }
                else {
                    console.log("true3")
                    return true;
                }
            }
        }
        // if king stay in right-upper
        if (y < currentPositionY && x > currentPositionX) {
            for (let i = x - 1, j = y + 1; i >= 0 && j < constant.BOARD_LENGTH; i--, j++) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == constant.PLAYER_BISHOP || board[j][i] == constant.PLAYER_QUEEN) {
                    console.log("false3")
                    return false;
                }
                else {
                    console.log("true4")
                    return true;
                }
            }
        }
        // if king stay in right-lower
        if (y > currentPositionY && x > currentPositionX) {
            for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
                if (i == currentPositionX && j == currentPositionY || board[j][i] == null) continue;
                else if (board[j][i] == constant.PLAYER_BISHOP || board[j][i] == constant.PLAYER_QUEEN) {
                    console.log("false4")
                    return false;
                }
                else {
                    console.log("true5")
                    return true;
                }
            }
        }
        console.log("true6")
        return true;
    }
    // Checking that king and the pieces are in same row or column
    else if (y == currentPositionY || currentPositionX == x) {
        // if the pieces and the king stay in same row
        if (y == currentPositionY) {
            // check that next move is also in vertical ? if then move is safe for king
            if (currentPositionY == nextMoveY){
                console.log("true7")
                return true;
            }

            // if king stay in right-side
            if (x > currentPositionX) {
                for (let i = x - 1; i >= 0; i--) {
                    if (i == currentPositionX || board[y][i] == null) continue;
                    else if (board[y][i] == constant.PLAYER_ROOK || board[y][i] == constant.PLAYER_QUEEN) {
                        console.log("false5")
                        return false;
                    }
                    else {
                        console.log("true8")
                        return true;
                    }
                }
            }
            // if king stay in left-side
            else {
                for (let i = x + 1; i < constant.BOARD_WIDTH; i++) {
                    if (i == currentPositionX || board[y][i] == null) continue;
                    else if (board[y][i] == constant.PLAYER_ROOK || board[y][i] == constant.PLAYER_QUEEN) {
                        console.log("false6")
                        return false;
                    }
                    else {
                        console.log("true9")
                        return true;
                    }
                }
            }
        }
        // if the pieces and the king stay in same column
        else {
            // check that next move is also in vertical ? if then move is safe for king
            if (currentPositionX == nextMoveX){
                console.log("true10")
                return true;
            }


            // if king stay in lower-side
            if (y >currentPositionY) {
                for (let j = y - 1; j >= 0; j--) {
                    if (j == currentPositionY || board[j][x] == null) continue;
                    else if (board[j][x] == constant.PLAYER_ROOK || board[j][x] == constant.PLAYER_QUEEN) {
                        console.log("false7")
                        return false;
                    }
                    else {
                        console.log("true11")
                        return true;
                    }
                }
            }
            // if king stay in upper-side
            else {
                for (let j = y + 1; j <constant.BOARD_LENGTH; j++) {
                    if (j == currentPositionY || board[j][x] == null) continue;
                    else if (board[j][x] == constant.PLAYER_ROOK || board[j][x] == constant.PLAYER_QUEEN) {
                        console.log("false8")
                        return false;
                    }
                    else {
                        console.log("true12")
                        return true;
                    }
                }
            }
        }
    }
    // the move does not affect in king's safty
    else {
        console.log("true13")
        return true;
    }
}


export { isThisMoveSafeForKing };