import * as Board from './board.js';
import * as constant from './constant.js';
import * as pieces_move from './moveFunction/pieces_move.js';
import  * as kingsSafety from './moveFunction/kingsSafety.js';


const board = Board.initialize();
Board.printBoard(board);
// console.log(board);
// console.log(kingsSafety.isItCheck(board, constant.COMPUTER_KING))

Board.printAllBoards(pieces_move.kings_moves(board, 3, 2));
// console.log(pieces_move.queens_move(board, 2, 2))