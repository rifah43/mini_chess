import * as chess_game from '../chess_game/chess_game.js';

function getPieceIcon(piece) {
    let constant = chess_game.constant;
    let icon;
    switch (piece) {
        case constant.PLAYER_PAWN:
            icon = "♙";
            break;
        case constant.PLAYER_ROOK:
            icon = "♖";
            break;
        case constant.PLAYER_KNIGHT:
            icon = "♘";
            break;
        case constant.PLAYER_BISHOP:
            icon = "♗";
            break;
        case constant.PLAYER_QUEEN:
            icon = "♕";
            break;
        case constant.PLAYER_KING:
            icon = "♔";
            break;
        case constant.COMPUTER_PAWN:
            icon = "♟";
            break;
        case constant.COMPUTER_ROOK:
            icon = "♜";
            break;
        case constant.COMPUTER_KNIGHT:
            icon = "♞";
            break;
        case constant.COMPUTER_BISHOP:
            icon = "♝";
            break;
        case constant.COMPUTER_QUEEN:
            icon = "♛";
            break;
        case constant.COMPUTER_KING:
            icon = "♚";
            break;
        default:
            icon = 'n';
    }

    return icon;
}


function getPiecesName(icon) {
    let constant = chess_game.constant;
    let pieceName;
    switch (icon) {
        case  "♙":
            pieceName = constant.PLAYER_PAWN;
            break;
        case "♖":
            pieceName = constant.PLAYER_ROOK;
            break;
        case "♘":
            pieceName = constant.PLAYER_KNIGHT;
            break;
        case "♗":
            pieceName = constant.PLAYER_BISHOP;
            break;
        case "♕":
            pieceName = constant.PLAYER_QUEEN;
            break;
        case "♔":
            pieceName = constant.PLAYER_KING;
            break;
        case "♟":
            pieceName = constant.COMPUTER_PAWN;
            break;
        case "♜":
            pieceName = constant.COMPUTER_ROOK;
            break;
        case "♞":
            pieceName = constant.COMPUTER_KNIGHT;
            break;
        case "♝":
            pieceName = constant.COMPUTER_BISHOP;
            break;
        case "♛":
            pieceName = constant.COMPUTER_QUEEN;
            break;
        case "♚":
            pieceName = constant.COMPUTER_KING;
            break;
        default:
            pieceName = null;
    }

    return pieceName;
}

export { getPieceIcon, getPiecesName };