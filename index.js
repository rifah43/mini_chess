// const Board = require('./board.js');
// const pieces_move = require('./moveFunction/pieces_move.js');

import * as Board from './board.js';
import * as pieces_move from './moveFunction/pieces_move.js';

const board = Board.initialize();
Board.printBoard(board);

// Board.printAllMoves(board, pieces_move.getAllMovesForA_Position(board, 3, 2))
Board.printAllMoves(board, pieces_move.getAllComputersMoves(board))
