const constant = require('../constant.js');
const check_pieces = require('./check_pieces.js');

function findKingsPosition(board, king) {
    let x, y;
    for (y = 0; y < constant.BOARD_LENGTH; y++) {
        for (x = 0; x < constant.BOARD_WIDTH; x++) {
            if (board[y][x] === king) return [y, x];
        }
    }
}

function isMoveSafeForKing(board, king, upperPlayerName) {
    if(upperPlayerName != constant.COMPUTER_UPPER && upperPlayerName != constant.PLAYER_UPPER) {
        console.log('"upperPlayerName" as ', upperPlayerName,' is invalide!!!!');
        return null;
    }
    let [y, x] = findKingsPosition(board, king);

    if (king === constant.COMPUTER_KING) {
        for (let i = 0; i < constant.BOARD_LENGTH; i++) {
            for (let j = 0; j < constant.BOARD_WIDTH; j++) {
                // checking for player's pawns
                if (check_pieces.isPlayerPawn(board[i][j])) {
                    if (upperPlayerName === constant.COMPUTER_UPPER) {
                        // then player pawn's killing moves will be only upper left or right
                        if (y == i - 1 && ((x + 1) == j || (x - 1) == j)) {
                            return false;
                        }
                    }
                    else {
                         // then player pawn's killing moves will be only lower left or right
                         if (y == i + 1 && ((x + 1) == j || (x - 1) == j)) {
                            return false;
                        }
                    }
                }

                // checking for player's rook
                else if (board[i][j] === constant.PLAYER_ROOK) {
                    if(i === y) {
                        let from
                        if(j>x) {
                            for(let a=y+1 ; a<i ; a++) {
                                if(board[y][a] != null) break;
                            }
                        }
                    }
                    else {

                    }
                }
            }
        }
    }
    else if (king == constant.PLAYER_KING) {

    }
    else {
        console.log(king + " is not a king!!!");
        return null;
    }
}


module.exports = { isMoveSafeForKing };