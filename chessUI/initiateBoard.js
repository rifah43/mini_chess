import { setPieceIcon } from "./placeIcons.js";
import {pieceInfo} from "./layout.js";

function boardGeneration(white,gameboard){  
      for (let row = 0; row < 6; row++) {
          for (let col = 0; col < 5; col++) {
            let square = document.createElement("div");
            square.classList.add("square");
            if (!white) {
              square.classList.add("black");
            }
            let pos= String(row)+","+String(col);
            square.id= pos;
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
        }
}

export {boardGeneration};