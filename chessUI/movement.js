import { minimaxAlphaBeta } from "./AIPlayer.js";

const depth= 3;
function makeAIMove(board, currentPlayer) {
    const {bestMove, evaluation} = minimaxAlphaBeta(board, depth, -Infinity, Infinity, true);
    console.log(evaluation);
    console.log(bestMove);
    if (bestMove) {
      const sourcePosition = bestMove.source;
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
    return { board, currentPlayer };
  }

  export {makeAIMove};