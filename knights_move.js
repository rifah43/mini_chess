import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';


/* kings castiling move is not implemented as it is a minnichess
 if you want to make it 8x8 chessboard plz implement  this feature */
function move(board, positionY, positionX) {
    try {
        let totalMoves = [], x, y;
        if (board[positionY][positionX] != constant.COMPUTER_KING) {
            console.log("In position [", positionY, ",", positionX, "] is not a computer king!!!");
            return null;
        }

        /*------------ diagonal move ------------*/
        // checking move in left-upper side
        y = positionY - 1;
        x = positionX - 1;
        if (x >= 0 && y >= 0) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }
        // checking move in right-upper side
        y = positionY - 1;
        x = positionX + 1;
        if (x < constant.BOARD_WIDTH && y >= 0) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }
        // checking move in left-lower
        y = positionY + 1;
        x = positionX - 1;
        if (x >= 0 && y < constant.BOARD_LENGTH) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }
        // checking move in right-lower
        y = positionY + 1;
        x = positionX + 1;
        if (x < constant.BOARD_WIDTH && y < constant.BOARD_LENGTH) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }




        /*------------ up-down move ------------*/
        // checking move in left side
        y = positionY;
        x = positionX - 1;
        if (x >= 0) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }

        // checking move in right side
        y = positionY;
        x = positionX + 1;
        if (x < constant.BOARD_WIDTH) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }


        // checking move in lower
        y = positionY + 1;
        x = positionX;
        if (y < constant.BOARD_LENGTH) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }

        // checking move in upper
        y = positionY - 1;
        x = positionX;
        if (y < constant.BOARD_LENGTH) {
            if (board[x][y] == null || check_pieces.isPlayerPieces(board[y][x])) {
                const temp = board.map(row => [...row]);
                temp[y][x] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }
        }

        return totalMoves;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export { move };