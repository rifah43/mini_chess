const chess_game = require('./chess_game/chess_game.js');

const constant = chess_game.constant;
const board = chess_game.initializeBoard();
chess_game.printBoard(board);

// console.log(chess_game.isItCheckMate(board, constant.COMPUTER_KING))
// chess_game.printAllMoves(board, chess_game.getAllComputersMoves(board));
// chess_game.printAllMoves(board, chess_game.getAllMovesForA_Position(board, 5, 2));
// chess_game.printAllMoves(board, chess_game.getAllMovesForA_Position(board, 0, 2));


// console.log(evaluateBoard.evaluateBoard(board));
// console.log(chess_game.computersNextMove(board))
chess_game.printAllMoves(board, [chess_game.computersNextMove(board)])
