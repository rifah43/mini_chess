const Board = require('./board.js');
const constant = require('./constant.js');
const pieces_move = require('./moveFunction/pieces_move.js');
const kingsSafety = require('./moveFunction/kingsSafety.js')

const UpperPlayerName = constant.PLAYER_UPPER;

const board = Board.initialize(UpperPlayerName);
// Board.printBoard(board);
// console.log(board);

// Board.printAllBoards(pieces_move.kings_move(board, 5, 1));
kingsSafety.isMoveSafeForKing(board, constant.PLAYER_KING);