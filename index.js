const Board = require('./board.js');
const constant = require('./constant.js');
const pieces_move = require('./moveFunction/pieces_move.js');

const UpperPlayerName = constant.PLAYER_UPPER;

const board = Board.initialize(UpperPlayerName);
// Board.printBoard(board);
// console.log(board);

Board.printAllBoards(pieces_move.pawns_move(board, 1, 2, UpperPlayerName));