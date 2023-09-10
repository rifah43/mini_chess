// pawnEvalCom = [
//     0,  0,  0,  0,  0,  0,  0,  0,
//     5, 10, 10, -20, -20, 10, 10,  5,
//     5, -5, -10,  0,  0, -10, -5,  5,
//     0,  0,  0, 20, 20,  0,  0,  0,
//     5,  5, 10, 25, 25, 10,  5,  5,
//     10, 10, 20, 30, 30, 20, 10, 10,
//     50, 50, 50, 50, 50, 50, 50, 50,
//     0, 0, 0, 0, 0, 0, 0, 0
// ]
// knightEval = [
//     -50, -40, -30, -30, -30, -30, -40, -50,
//     -40, -20, 0, 0, 0, 0, -20, -40,
//     -30, 0, 10, 15, 15, 10, 0, -30,
//     -30, 5, 15, 20, 20, 15, 5, -30,
//     -30, 0, 15, 20, 20, 15, 0, -30,
//     -30, 5, 10, 15, 15, 10, 5, -30,
//     -40, -20, 0, 5, 5, 0, -20, -40,
//     -50, -40, -30, -30, -30, -30, -40, -50
// ]
// bishopEvalWhite = [
//     -20, -10, -10, -10, -10, -10, -10, -20,
//     -10, 5, 0, 0, 0, 0, 5, -10,
//     -10, 10, 10, 10, 10, 10, 10, -10,
//     -10, 0, 10, 10, 10, 10, 0, -10,
//     -10, 5, 5, 10, 10, 5, 5, -10,
//     -10, 0, 5, 10, 10, 5, 0, -10,
//     -10, 0, 0, 0, 0, 0, 0, -10,
//     -20, -10, -10, -10, -10, -10, -10, -20
// ]
// rookEvalWhite = [
//     0, 0, 0, 5, 5, 0, 0, 0,
//     -5, 0, 0, 0, 0, 0, 0, -5,
//     -5, 0, 0, 0, 0, 0, 0, -5,
//     -5, 0, 0, 0, 0, 0, 0, -5,
//     -5, 0, 0, 0, 0, 0, 0, -5,
//     -5, 0, 0, 0, 0, 0, 0, -5,
//     5, 10, 10, 10, 10, 10, 10, 5,
//     0, 0, 0, 0, 0, 0, 0, 0
// ]
// queenEval = [
//     -20, -10, -10, -5, -5, -10, -10, -20,
//     -10, 0, 0, 0, 0, 0, 0, -10,
//     -10, 0, 5, 5, 5, 5, 0, -10,
//     -5, 0, 5, 5, 5, 5, 0, -5,
//     0, 0, 5, 5, 5, 5, 0, -5,
//     -10, 5, 5, 5, 5, 5, 0, -10,
//     -10, 0, 5, 0, 0, 0, 0, -10,
//     -20, -10, -10, -5, -5, -10, -10, -20
// ]
// kingEvalWhite = [
//     20, 30, 10, 0, 0, 10, 30, 20,
//     20, 20, 0, 0, 0, 0, 20, 20,
//     -10, -20, -20, -20, -20, -20, -20, -10,
//     20, -30, -30, -40, -40, -30, -30, -20,
//     -30, -40, -40, -50, -50, -40, -40, -30,
//     -30, -40, -40, -50, -50, -40, -40, -30,
//     -30, -40, -40, -50, -50, -40, -40, -30,
//     -30, -40, -40, -50, -50, -40, -40, -30
// ]


// const constant = require('../constant.js');
// const check_pieces = require('../moveFunction/check_pieces.js');
import * as constant from '../constant.js';
import * as check_pieces from '../moveFunction/check_pieces.js';

// priority of killing
const KING_VALUE = 20000;
const QUEEN_VALUE = 900;
const ROOK_VALUE = 500;
const BISHOP_VALUE = 330;
const KNIGHT_VALUE = 320;
const PAWN_VALUE = 100;

const pawnEvalCom = [
    [0, 0, 0, 0, 0],
    [5, 5, 5, 5, 5],
    [2, 10, 10, 12, 5],
    [10, 20, 20, 20, 10],
    [50, 50, 50, 50, 50],
    [0, 0, 0, 0, 0]
]
const pawnEvalPlayer = [
    [0, 0, 0, 0, 0],
    [50, 50, 50, 50, 50],
    [10, 20, 20, 20, 10],
    [2, 10, 10, 12, 5],
    [5, 5, 5, 5, 5],
    [0, 0, 0, 0, 0]
]

const knightEval = [
    [5, 7, 10, 7, 5],
    [10, 15, 20, 15, 10],
    [15, 20, 30, 20, 15],
    [15, 20, 30, 20, 15],
    [10, 15, 20, 15, 10],
    [5, 7, 10, 7, 5]
]

const bishopEval = [
    [5, 7, 10, 7, 5],
    [7, 10, 15, 10, 7],
    [10, 15, 20, 15, 10],
    [10, 15, 20, 15, 10],
    [7, 10, 15, 10, 7],
    [5, 7, 10, 7, 5]
]

const rookEvalCom = [
    [0, 0, 5, 0, 0],
    [-5, 5, 10, 5, -5],
    [-5, 0, 0, 0, -5],
    [-5, 0, 0, 0, -5],
    [-5, 0, 0, 0, -5],
    [0, 0, 5, 0, 0]
]
const rookEvalPlayer = [
    [0, 0, 5, 0, 0],
    [-5, 0, 0, 0, -5],
    [-5, 0, 0, 0, -5],
    [-5, 0, 0, 0, -5],
    [-5, 5, 10, 5, -5],
    [0, 0, 5, 0, 0],
]

const queenEvalCom = [
    [-3, -5, -2, -5,  -3],
    [-5, 0, 0, 0,  -5],
    [-2, 5, 0, 5, -2],
    [-5, 5, 5, 5, -5],
    [-5, 0, 0, 0,  -5],
    [-3, 4, 4, 4, -3]
]
const queenEvalPlayer = [
    [-3, 4, 4, 4, -3],
    [-5, 0, 0, 0,  -5],
    [-5, 5, 5, 5, -5],
    [-2, 5, 0, 5, -2],
    [-5, 0, 0, 0,  -5],
    [-3, -5, -2, -5,  -3]
]

const kingEvalCom = [
    [1,  5, 10, 5, 1],
    [2, 10, 0, 10, 2],
    [3, 10, 10, 10, 3],
    [2, 10, 10, 10, 2],
    [1, 0, 5, 0, 1],
    [0, 0, 1, 0, 0]
]
const kingEvalPlayer = [
    [0, 0, 1, 0, 0],
    [1, 0, 5, 0, 1],
    [2, 10, 10, 10, 2],
    [3, 10, 10, 10, 3],
    [2, 10, 0, 10, 2],
    [1,  5, 10, 5, 1]
]


function getComputerPieceValue(piece, y, x) {
    if(piece == constant.COMPUTER_KING) return kingEvalCom[y][x]*KING_VALUE;
    else if(piece == constant.COMPUTER_QUEEN) return queenEvalCom[y][x]*QUEEN_VALUE;
    else if(piece == constant.COMPUTER_ROOK) return rookEvalCom[y][x]*ROOK_VALUE;
    else if(piece == constant.COMPUTER_KNIGHT) return knightEval[y][x]*KNIGHT_VALUE;
    else if(piece == constant.COMPUTER_BISHOP) return bishopEval[y][x]*BISHOP_VALUE;
    else if(piece == constant.COMPUTER_PAWN) return pawnEvalCom[y][x]*PAWN_VALUE;
    else return 0;
}

function getPlayerPieceValue(piece, y, x) {
    if(piece == constant.PLAYER_KING) return kingEvalPlayer[y][x]*KING_VALUE;
    else if(piece == constant.PLAYER_QUEEN) return queenEvalPlayer[y][x]*QUEEN_VALUE;
    else if(piece == constant.PLAYER_ROOK) return rookEvalPlayer[y][x]*ROOK_VALUE;
    else if(piece == constant.PLAYER_KNIGHT) return knightEval[y][x]*KNIGHT_VALUE;
    else if(piece == constant.PLAYER_BISHOP) return bishopEval[y][x]*BISHOP_VALUE;
    else if(piece == constant.PLAYER_PAWN) return pawnEvalPlayer[y][x]*PAWN_VALUE;
    else return 0;
}


function evaluateBoard(board) {
    totalValue = 0;
    for(let i=0 ; i<constant.BOARD_LENGTH ; i++) {
        for(let j=0 ; j<constant.BOARD_WIDTH ; j++) {
            if(board[i][j] == null) continue;
            else if(check_pieces.isComputerPieces(board[i][j])) {
                totalValue += getComputerPieceValue(board[i][j], i, j);
            }
            else if(check_pieces.isPlayerPieces(board[i][j])) {
                totalValue -= getPlayerPieceValue(board[i][j], i, j);
            }
        }
    }

    return totalValue;
}


// module.exports = { evaluateBoard };
export { evaluateBoard };