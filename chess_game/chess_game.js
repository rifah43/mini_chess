// const Board = require('./board.js');
// const pieces_move = require('./moveFunction/pieces_move.js');
// const kingsSafety = require('./moveFunction/kingsSafety.js');
// const constant = require('./constant.js');
// const checkMateChecker = require('./checkMateChecker.js');

import * as Board from './board.js';
import * as pieces_move from './moveFunction/pieces_move.js';
import * as kingsSafety from './moveFunction/kingsSafety.js';
import * as constant from './constant.js';
import * as checkMateChecker from './checkMateChecker.js';

const initializeBoard = Board.initialize;
const printAllMoves = Board.printAllMoves;
const printBoard = Board.printBoard;

const getAllMovesForA_Position = pieces_move.getAllMovesForA_Position;
const getAllComputersMoves = pieces_move.getAllComputersMoves;

const isItCheck = kingsSafety.isItCheck;
const isItCheckMate = checkMateChecker.isItCheckMate;

// module.exports = {
//     initializeBoard,
//     printBoard,
//     printAllMoves,
//     getAllMovesForA_Position,
//     getAllComputersMoves,
//     isItCheck,
//     isItCheckMate,
//     constant
// };

export{
    initializeBoard,
    printBoard,
    printAllMoves,
    getAllMovesForA_Position,
    getAllComputersMoves,
    isItCheck,
    isItCheckMate,
    constant
};