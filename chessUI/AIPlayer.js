import { evaluateBoard } from "./evaluation.js";
import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game.js";
import { findKing, isStalemate } from "./layout.js";
import { isItCheckMate } from "../chess_game/checkMateChecker.js";

function minimaxAlphaBeta(board, depth, alpha, beta, maximizingPlayer,bestMove) {
    console.log(depth);
    console.log(bestMove);
    const {terminal, reason}=isTerminal(board);
  if (terminal) {
    alert(reason);
  }
  if (depth === 0) {
    const evaluation = evaluateBoard(board);
    console.log(bestMove);
    return { bestMove, evaluation }; 
  }

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    const moves = getAllComputersMoves(board);
    console.log(moves,"max e");

    for (const move of moves) {
      const newBoard = makeMove(board, move);
      const { evaluation } = minimaxAlphaBeta(newBoard, depth - 1, alpha, beta, false,bestMove);
      if (evaluation > maxEval) {
        maxEval = evaluation;
        bestMove = move;
      }
      console.log(alpha, "nnnn", maxEval);
      alpha = Math.max(alpha, maxEval);
      if (beta <= alpha) break;
    }
    return { bestMove, evaluation: maxEval };
  } else {
    let minEval = Infinity;
    const moves = getAllPlayerMoves(board);
    for (const move of moves) {
      const newBoard = makeMove(board, move);
      const { evaluation } = minimaxAlphaBeta(newBoard, depth - 1, alpha, beta, true,bestMove);
      if (evaluation < minEval) {
        minEval = evaluation;
        bestMove = move;
      }
      beta = Math.min(beta, minEval);
      if (beta <= alpha) break;
    }
    return { bestMove, evaluation: minEval };
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
        return { terminal: true, reason: "King Captured" };
      }
      const king=findKing(board,"white");
      if (isStalemate(board, king, "black")) {
        return { terminal: true, reason: "Stalemate" };
      }
    
      return { terminal: false, reason: "" };
  }


export { minimaxAlphaBeta };
