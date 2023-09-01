import * as Board from './board.js';
import * as constant from './constant.js';
import * as pieces_move from './moveFunction/pieces_move.js';

const UpperPlayerName = constant.PLAYER_UPPER;

const board = Board.initialize(UpperPlayerName);
Board.printBoard(board);
// console.log(board);

// Board.printAllBoards(pieces_move.queens_move(board, 3, 3));
console.log(pieces_move.queens_move(board, 2, 2))