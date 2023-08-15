const constant = require('../constant')

function isComputerPieces(piece) {
    if (piece === null) return false;

    else if (piece === constant.COMPUTER_BISHOP ||
        piece === constant.COMPUTER_KING ||
        piece === constant.COMPUTER_KNIGHT ||
        piece === constant.COMPUTER_QUEEN ||
        piece === constant.COMPUTER_ROOK ||
        piece === constant.COMPUTER_PAWN1 ||
        piece === constant.COMPUTER_PAWN2 ||
        piece === constant.COMPUTER_PAWN3 ||
        piece === constant.COMPUTER_PAWN4 ||
        piece === constant.COMPUTER_PAWN5
    ) return true;

    else return false;
}

function isPlayerPieces(piece) {
    if (piece === null) return false;

    else if (piece === constant.PLAYER_BISHOP ||
        piece === constant.PLAYER_KING ||
        piece === constant.PLAYER_KNIGHT ||
        piece === constant.PLAYER_QUEEN ||
        piece === constant.PLAYER_ROOK ||
        piece === constant.PLAYER_PAWN1 ||
        piece === constant.PLAYER_PAWN2 ||
        piece === constant.PLAYER_PAWN3 ||
        piece === constant.PLAYER_PAWN4 ||
        piece === constant.PLAYER_PAWN5
    ) return true;

    else return false;
}


function isComputerPawn(piece) {
    if (piece === null) return false;
    
    else if (piece === constant.COMPUTER_PAWN1 ||
        piece === constant.COMPUTER_PAWN2 ||
        piece === constant.COMPUTER_PAWN3 ||
        piece === constant.COMPUTER_PAWN4 ||
        piece === constant.COMPUTER_PAWN5
    ) return true;

    else return false;
}

function isPlayerPawn(piece) {
    if (piece === null) return false;

    else if (piece === constant.PLAYER_PAWN1 ||
        piece === constant.PLAYER_PAWN2 ||
        piece === constant.PLAYER_PAWN3 ||
        piece === constant.PLAYER_PAWN4 ||
        piece === constant.PLAYER_PAWN5
    ) return true;

    else return false;
}



module.exports = {
    isComputerPieces, isPlayerPieces, isComputerPawn, isPlayerPawn
}