import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game.js";
import { minimaxAlphaBeta } from "./AIPlayer.js";

const depth= 3;
let validMoves=null;
let board= null;
function makeAIMove(main_board, currentPlayer) {
  console.log(main_board);
  board=main_board;
    validMoves= getAllComputersMoves(board);
    let bestMove=null;
    bestMove=findBestMove(validMoves);
    // const {bestMove, evaluation} = minimaxAlphaBeta(board, depth, -Infinity, Infinity, true);
    // console.log(bestMove);
    if (bestMove) {
      // console.log(move);
      move++;
      const sourcePosition = bestMove.currentPosition;
      // console.log(sourcePosition);
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
    // console.log(board, currentPlayer);
    return { board, currentPlayer };
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function findBestMove(validMoves) {
    let nextMove = null;
    let evaluation = null;
    validMoves = shuffle(validMoves);
    console.log(board, "-----start");
    ({ nextMove, evaluation } = minimaxAlphaBeta(board, validMoves, depth, -Infinity, Infinity, true));
    return nextMove;
  }
  

  export {makeAIMove};