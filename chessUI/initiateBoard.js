import { setPieceIcon } from "./placeIcons.js";

function boardGeneration(white,gameboard){
    const pieceInfo = [
        ["white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"],
        ["white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn"],
        ["black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook"],
      ];
      
      for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 8; col++) {
            let square = document.createElement("div");
            square.classList.add("square");
            if (!white) {
              square.classList.add("black");
            }
            white = !white;
        
            const pieceId = pieceInfo[row][col];
            if (pieceId) {
                const piece = document.createElement("div");
                piece.classList.add("piece");
                piece.id = pieceId;
                
                setPieceIcon(piece, pieceId);
                
                square.appendChild(piece);
              }
        
            gameboard.appendChild(square);
          }
          white = !white;
        }
}

export {boardGeneration};