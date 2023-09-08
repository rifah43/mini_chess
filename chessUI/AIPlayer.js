import { evaluateBoard } from "./evaluation.js";
import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game.js";
import { isItCheck } from "../chess_game/moveFunction/kingsSafety.js";
import { findKing } from "./layout.js";
import { isItCheckMate } from "../chess_game/checkMateChecker.js";

function minimaxAlphaBeta(board, depth, alpha, beta, maximizingPlayer) {
    console.log(depth);
    console.log(isTerminal(board)[0]);
  if (depth === 0 || isTerminal(board)[0]) {
    const evaluation = evaluateBoard(board);
    return { move: null, evaluation }; 
  }

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    let bestMove = null;
    const moves = getAllComputersMoves(board);
    console.log(moves,"max e");

    for (const move of moves) {
      const newBoard = makeMove(board, move);
      const { evaluation } = minimaxAlphaBeta(newBoard, depth - 1, alpha, beta, false);
      if (evaluation > maxEval) {
        maxEval = evaluation;
        bestMove = move;
      }
      alpha = Math.max(alpha, maxEval);
      if (beta <= alpha) break;
    }
    return { move: bestMove, evaluation: maxEval };
  } else {
    let minEval = Infinity;
    let bestMove = null;
    const moves = getAllPlayerMoves(board);
    for (const move of moves) {
      const newBoard = makeMove(board, move);
      const { evaluation } = minimaxAlphaBeta(newBoard, depth - 1, alpha, beta, true);
      if (evaluation < minEval) {
        minEval = evaluation;
        bestMove = move;
      }
      beta = Math.min(beta, minEval);
      if (beta <= alpha) break;
    }
    return { move: bestMove, evaluation: minEval };
  }
}

function makeMove(board, move) {
  const { currentPosition, nextPosition } = move;
  const pieceToMove = board[currentPosition.y][currentPosition.x];

  const newBoard = board.map((row) => [...row]);

  newBoard[nextPosition.y][nextPosition.x] = pieceToMove;
  newBoard[currentPosition.y][currentPosition.x] = null;

  return newBoard;
}

function isTerminal(board) {
    const wking = findKing(board, "white");
    const bking = findKing(board, "black");
    const whiteKingCaptured = isItCheckMate(board, wking);
    const blackKingCaptured = isItCheckMate(board, bking);
  
    if (whiteKingCaptured[0] || blackKingCaptured[0]) {
      return true; 
    }
  
    if (isDraw(board, wking, bking)) {
      return true; 
    }
  
    return false;
  }

function isDraw(board, wking, bking) {
  if (getAllComputersMoves(board)==null && getAllPlayerMoves(board)==null && !isItCheck(wking) && !isItCheck(bking)) {
    return true;
  }
  return false;
}

export { minimaxAlphaBeta };
