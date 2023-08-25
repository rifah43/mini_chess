import * as check_pieces from './check_pieces.js';
import * as constant from '../constant.js';

function move(board, positionY, positionX, upperPlayerName) {
    try {
        let totalMoves = [];
        if (!check_pieces.isComputerPawn(board[positionY][positionX])){
            console.log("In position [", positionY, ",", positionX, "] is not a computer pawn!!!");
            return null;
        }

        if (upperPlayerName === constant.COMPUTER_UPPER) {
            // Checking forword move
            if (board[positionY + 1][positionX] == null) {
                const temp = board.map(row => [...row]);
                temp[positionY + 1][positionX] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                
                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY+1 == constant.BOARD_LENGTH-1) {
                    temp[positionY + 1][positionX] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
            if (positionY == 1 && board[positionY + 1][positionX] == null && board[positionY + 2][positionX] == null) {
                const temp = board.map(row => [...row]);
                temp[positionY + 2][positionX] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }



            // Checking diagonally forward move
            if (positionX != 0 && check_pieces.isPlayerPieces(board[positionY + 1][positionX - 1])) {
                const temp = board.map(row => [...row]);
                temp[positionY + 1][positionX - 1] = board[positionY][positionX];
                temp[positionY][positionX] = null;

                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY+1 == constant.BOARD_LENGTH-1) {
                    temp[positionY + 1][positionX - 1] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
            if (positionX != (constant.BOARD_WIDTH - 1) && check_pieces.isPlayerPieces(board[positionY + 1][positionX + 1])) {
                const temp = board.map(row => [...row]);
                temp[positionY + 1][positionX + 1] = board[positionY][positionX];
                temp[positionY][positionX] = null;

                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY+1 == constant.BOARD_LENGTH-1) {
                    temp[positionY + 1][positionX + 1] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
        }

        else {
            // Checking forword move
            if (board[positionY - 1][positionX] == null) {
                const temp = board.map(row => [...row]);
                temp[positionY - 1][positionX] = board[positionY][positionX];
                temp[positionY][positionX] = null;

                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY-1 == 0) {
                    temp[positionY - 1][positionX] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
            if (positionY == 4 && board[positionY - 1][positionX] == null && board[positionY - 2][positionX] == null) {
                const temp = board.map(row => [...row]);
                temp[positionY - 2][positionX] = board[positionY][positionX];
                temp[positionY][positionX] = null;
                totalMoves.push(temp);
            }



            // Checking diagonally forward move
            if (positionX != 0 && check_pieces.isPlayerPieces(board[positionY - 1][positionX - 1])) {
                const temp = board.map(row => [...row]);
                temp[positionY - 1][positionX - 1] = board[positionY][positionX];
                temp[positionY][positionX] = null;

                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY-1 == 0) {
                    temp[positionY - 1][positionX-1] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
            if (positionX != (constant.BOARD_WIDTH - 1) && check_pieces.isPlayerPieces(board[positionY - 1][positionX + 1])) {
                const temp = board.map(row => [...row]);
                temp[positionY - 1][positionX + 1] = board[positionY][positionX];
                temp[positionY][positionX] = null;

                // If Computer Pawon reached the last line of the opponent player, then it will replace with Queen 
                if(positionY-1 == 0) {
                    temp[positionY - 1][positionX + 1] = constant.COMPUTER_QUEEN;
                }
                totalMoves.push(temp);
            }
        }
        return totalMoves;
    }

    catch (error) {
        console.log(error);
        return null;
    }
}

export { move }