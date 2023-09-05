import * as Board from './board.js';
import * as constant from './constant.js';
import * as pieces_move from './moveFunction/pieces_move.js';
import  * as kingsSafety from './moveFunction/kingsSafety.js';


const board = Board.initialize();
Board.printBoard(board);

// Board.printAllMoves(board, pieces_move.kings_moves(board, 3, 2));

// Board.printAllMoves(board, pieces_move.getAllMoves(board, 0, 2));
console.log(kingS.isItCheck(board, constant.COMPUTER_KING))

