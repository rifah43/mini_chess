import { minimaxAlphaBeta } from "./AIPlayer.js";

const depth= 3;
function makeAIMove(board, currentPlayer) {
    const move= null;
    const {bestMove, evaluation} = minimaxAlphaBeta(board, depth, -Infinity, Infinity, true, move);
    console.log(evaluation);
    console.log(bestMove);
    if (bestMove) {
      const sourcePosition = bestMove.currentPosition;
      console.log(sourcePosition);
      const targetPosition = bestMove.nextPosition;
  
      const sourceSquare = document.getElementById(
        `${sourcePosition.y},${sourcePosition.x}`
      );
      const targetSquare = document.getElementById(
        `${targetPosition.y},${targetPosition.x}`
      );

      const piece = board[sourcePosition.y][sourcePosition.x];
      board[targetPosition.y][targetPosition.x] = piece;
      board[sourcePosition.y][sourcePosition.x] = null;

      if (sourceSquare && targetSquare) {
        targetSquare.innerHTML = sourceSquare.innerHTML;
        sourceSquare.innerHTML = '';
  
        currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
      }
    }
    console.log(board, currentPlayer);
    return { board, currentPlayer };
  }

  export {makeAIMove};