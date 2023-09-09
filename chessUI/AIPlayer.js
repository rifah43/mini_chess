import { evaluateBoard } from "./evaluation.js";
import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game.js";
// import { findKing, isStalemate } from "./layout.js";
// import { isItCheckMate } from "../chess_game/checkMateChecker.js";

function minimaxAlphaBeta(board, validMoves, depth, alpha, beta, isMaximizingPlayer){
  let nextMove = null;
  let newBoard= board;
  if (depth === 0) {
    const evaluation = evaluateBoard(board);
    return { bestMove: null, evaluation };
  }
  let evaluation = -Infinity;
  console.log(validMoves);
  for (const move of validMoves) {
    newBoard= makeMove(move,newBoard);
    let nextMoves = null;
    if(isMaximizingPlayer){
        nextMoves= getAllPlayerMoves(board);
    }
    else{
        nextMoves= getAllComputersMoves(board);
    }
    const score = minimaxAlphaBeta(newBoard, nextMoves, depth - 1, beta, alpha, isMaximizingPlayer);
    if (score > evaluation) {
      evaluation = score;
      if (depth === 3) {
        nextMove = move;
      }
    }
    if (evaluation > alpha) {
      alpha = evaluation;
    }
    if (alpha >= beta) {
      break;
    }
  }
  return {nextMove,evaluation};
}

function makeMove(move,board) {
    const { currentPosition, nextPosition } = move;
    const pieceToMove = board[currentPosition.y][currentPosition.x];
    let newBoard= board;
    newBoard[currentPosition.y][currentPosition.x] = null;
    newBoard[nextPosition.y][nextPosition.x] = pieceToMove;
    return newBoard;
//   if (move.isPawnPromotion) {
//     board[move.endRow][move.endCol] = move.pieceMoved[0] + 'Q';
//   }
}

export { minimaxAlphaBeta };
