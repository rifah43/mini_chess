import { evaluateBoard } from "./evaluation.js";
import { getAllComputersMoves } from "../chess_game/chess_game.js";
//  import { findKing, isStalemate } from "./layout.js";
//  import { isItCheckMate } from "../chess_game/checkMateChecker.js";

let temp=null;

function minimaxAlphaBeta(board, depth, alpha, beta, isMaximizing) {

  if (depth === 0 ) {
    return { evaluation: evaluateBoard(board) };
  }

  let validMoves = null;
  if (isMaximizing) {
    validMoves = getAllComputersMoves(board);
  } else {
    validMoves = getAllPlayerMoves(board);
  }

  if (!validMoves || validMoves.length === 0) {
    return { evaluation: evaluateBoard(board) };
  }

  let bestMove = null;
  let bestEvaluation = isMaximizing ? -Infinity : Infinity;

  shuffle(validMoves).forEach((move) => {
    const newBoard = makeMove(move, board);
    const { evaluation } = minimaxAlphaBeta(newBoard, depth - 1, alpha, beta, !isMaximizing);

    if (isMaximizing) {
      if (evaluation > bestEvaluation) {
        bestEvaluation = evaluation;
        bestMove = move;
      }
      alpha = Math.max(alpha, evaluation);
    } else {
      if (evaluation < bestEvaluation) {
        bestEvaluation = evaluation;
        bestMove = move;
      }
      beta = Math.min(beta, evaluation);
    }

    if (alpha >= beta) {
      return;
    }

  });

  return { evaluation: bestEvaluation };
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



function makeMove(move,board) {
 let temp = board;
 if(!temp){
  return board;
  }
 let temp1 = temp.slice().map(row => row.slice())
  const {currentPosition, nextPosition} = move;
  // console.log(currentPosition, nextPosition,"currentPosition, nextPosition");
  temp1[nextPosition.y][nextPosition.x] = temp1[currentPosition.y][currentPosition.x];
  temp1[currentPosition.y][currentPosition.x] = null;
  
  return temp1;
}

function undo(newBoard) {
  newBoard=temp;
  // console.log(newBoard,"undo board----");
  return newBoard;
}

export { minimaxAlphaBeta };
