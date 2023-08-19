function setPieceIcon(piece, pieceId) {
  switch (pieceId) {
    case "white_pawn":
      piece.textContent = "♙";
      break;
    case "white_rook":
      piece.textContent = "♖";
      break;
    case "white_knight":
      piece.textContent = "♘";
      break;
    case "white_bishop":
      piece.textContent = "♗";
      break;
    case "white_queen":
      piece.textContent = "♕";
      break;
    case "white_king":
      piece.textContent = "♔";
      break;
    case "black_pawn":
      piece.textContent = "♟";
      break;
    case "black_rook":
      piece.textContent = "♜";
      break;
    case "black_knight":
      piece.textContent = "♞";
      break;
    case "black_bishop":
      piece.textContent = "♝";
      break;
    case "black_queen":
      piece.textContent = "♛";
      break;
    case "black_king":
      piece.textContent = "♚";
      break;
    default:
      piece.textContent = "NULL";
      break;
  }
}

export { setPieceIcon };