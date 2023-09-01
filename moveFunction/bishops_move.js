import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';
import * as kingsSafety from './kingsSafety.js';

function move(board, positionY, positionX) {
    try {
        let totalMoves = [];
        if (board[positionY][positionX] != constant.COMPUTER_BISHOP) {
            console.log("In position [", positionY, ",", positionX, "] is not a computer bishop!!!");
            return null;
        }

        // checking move in right-upper side
        for (let i = positionX + 1, j = positionY - 1; i < constant.BOARD_WIDTH && j >= 0; i++, j--) {
            if (board[j][i] == null || check_pieces.isPlayerPieces(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    const temp = board.map(row => [...row]);
                    temp[j][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in left-upper side
        for (let i = positionX - 1, j = positionY - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[j][i] == null || check_pieces.isPlayerPieces(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    const temp = board.map(row => [...row]);
                    temp[j][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }


        // checking move in left-lower
        for (let i = positionX - 1, j = positionY + 1; i >= 0 && j < constant.BOARD_LENGTH; i--, j++) {
            if (board[j][i] == null || check_pieces.isPlayerPieces(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    const temp = board.map(row => [...row]);
                    temp[j][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[j][i])) break; // no more right move
            }
            else {
                break;
            }
        }

        // checking move in right-lower
        for (let i = positionX + 1, j = positionY + 1; i < constant.BOARD_WIDTH && j < constant.BOARD_LENGTH; i++, j++) {
            if (board[j][i] == null || check_pieces.isPlayerPieces(board[j][i])) {
                if (kingsSafety.isThisMoveSafeForKing(board, positionY, positionX, j, i)) {
                    const temp = board.map(row => [...row]);
                    temp[j][i] = board[positionY][positionX];
                    temp[positionY][positionX] = null;
                    totalMoves.push(temp);
                }

                if (check_pieces.isPlayerPieces(board[j][i])) break; // no more right move
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


export { move };