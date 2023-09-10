import {constant, getAllComputersMoves, isItCheck} from '../chess_game/chess_game.js';
const pieceInfo = [];
function generatePieceInfo(board){

for (let row = 0; row < board.length; row++) {
  const pieceRow = [];
  for (let col = 0; col < board[row].length; col++) {
    const piece = board[row][col];
    if (piece === null) {
      pieceRow.push("");
    } else {
      if (piece === constant.PLAYER_PAWN) {
        pieceRow.push("white_pawn");
      } else if (piece === constant.PLAYER_ROOK) {
        pieceRow.push("white_rook");
      } else if (piece === constant.PLAYER_BISHOP) {
        pieceRow.push("white_bishop");
      } else if (piece === constant.PLAYER_KING) {
        pieceRow.push("white_king");
      } else if (piece === constant.PLAYER_QUEEN) {
        pieceRow.push("white_queen");
      } else if (piece === constant.PLAYER_KNIGHT) {
        pieceRow.push("white_knight");
      } else if (piece === constant.COMPUTER_PAWN) {
        pieceRow.push("black_pawn");
      } else if (piece === constant.COMPUTER_ROOK) {
        pieceRow.push("black_rook");
      } else if (piece === constant.COMPUTER_BISHOP) {
        pieceRow.push("black_bishop");
      } else if (piece === constant.COMPUTER_KING) {
        pieceRow.push("black_king");
      } else if (piece === constant.COMPUTER_QUEEN) {
        pieceRow.push("black_queen");
      } else if (piece === constant.COMPUTER_KNIGHT) {
        pieceRow.push("black_knight");
      }
    }
  }
  pieceInfo.push(pieceRow);
}
}
function findKing(board, cp) {
  let p = null;
  if (cp == "white") {
    p = "p";
  } else {
    p = "c";
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const piece = board[row][col];
      if (piece && piece.startsWith(p) && piece.endsWith("ki")) {
        return piece;
      }
    }
  }
  return null;
}

function isStalemate(board, king,currentPlayer) {
  if(currentPlayer==="white"){
    if (getAllPlayerMoves(board)==null && !isItCheck(king)) {
      return true;
    }
  }
  else{
    if (getAllComputersMoves(board)==null && !isItCheck(king)) {
      return true;
    }
  }
  return false;
}

export { pieceInfo, generatePieceInfo, findKing, isStalemate };

  //quick chess layout