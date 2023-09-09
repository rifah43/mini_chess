import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game.js";
import { minimaxAlphaBeta } from "./AIPlayer.js";

const depth= 3;
let validMoves=null;
let board= null;
function makeAIMove(board, currentPlayer) {
  validMoves= getAllComputersMoves(board);
  
  if(!validMoves || validMoves.length === 0){
    return {board, currentPlayer};
  }
  let bestMove=null;
  bestMove=findBestMove(board,validMoves);

  if(bestMove){
    const sourcePosition= bestMove.currentPosition;
    const targetPosition= bestMove.nextPosition;

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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function findBestMove(board, validMoves) {
    validMoves = shuffle(validMoves);
    let nextMove = null;
    let bestEvaluation = -Infinity;
    let tempBoard = board;
    for (let i = 0; i < validMoves.length; i++) {
      const move = validMoves[i];
      const { evaluation } = minimaxAlphaBeta(tempBoard, depth, -Infinity, Infinity, true);
      if (evaluation > bestEvaluation) {
        bestEvaluation = evaluation;
        nextMove = move;
      }
    }

    return nextMove;
  }
  

  export {makeAIMove};