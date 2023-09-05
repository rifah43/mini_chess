import { setPieceIcon } from "./placeIcons.js";
import { pieceInfo } from "./layout.js";
import { move as bishops_move } from "../moveFunction/bishops_move.js";

let draggedPiece = null;
let currentPlayer = "white";
let board=null;
function boardGeneration(white, gameboard,bb) {
  board=bb;
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      let square = document.createElement("div");
      square.classList.add("square");
      if (!white) {
        square.classList.add("black");
      }
      let pos = String(row) + "," + String(col);
      square.id = pos;
      white = !white;

      const pieceId = pieceInfo[row][col];
      if (pieceId) {
        const piece = document.createElement("div");
        piece.classList.add("piece");
        piece.id = pieceId;

        setPieceIcon(piece, pieceId);
        square.appendChild(piece);
        piece.setAttribute("draggable", true);

        piece.addEventListener("dragstart", handleDragStart);
        piece.addEventListener("dragenter", handleDragEnter);
        piece.addEventListener("dragleave", handleDragLeave);
      }

      square.addEventListener("dragover", handleDragOver);
      square.addEventListener("drop", handleDrop);

      gameboard.appendChild(square);
    }
  }
}

function handleDragStart(e) {
  const pieceColor = e.target.id.startsWith("white") ? "white" : "black";

  if (pieceColor === currentPlayer) {
    draggedPiece = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
  } else {
    e.preventDefault();
  }
}

function handleDragEnter(e) {
  e.preventDefault();
  e.target.classList.add("valid-drop-target");
}

function handleDragLeave(e) {
  e.target.classList.remove("valid-drop-target");
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("square")) {
    const pieceId = e.dataTransfer.getData("text/plain");
    const sourceSquare = draggedPiece.parentElement; // Get the square containing the dragged piece
    const nums = sourceSquare.id.split(",");
    console.log(pieceId.endsWith("bishop"))

    if (pieceId.endsWith("bishop")) {
      console.log(board)
      const possibleMoves = bishops_move(board, nums[0], nums[1]);
      console.log("Possible Moves:", possibleMoves);
      // Highlight valid drop targets (possible move squares)
      for (const move of possibleMoves) {
        const targetSquare = document.getElementById(
          `${move.nextPosition.y},${move.nextPosition.x}`
        );
        if (targetSquare) {
          targetSquare.classList.add("valid-drop-target");
        }
      }
    }

    const targetSquare = e.target;

    const existingPiece = targetSquare.querySelector(".piece");

    if (existingPiece) {
      targetSquare.removeChild(existingPiece);
      targetSquare.appendChild(draggedPiece);
    } else {
      targetSquare.appendChild(draggedPiece);
    }

    // Remove highlighting from all squares
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {
      square.classList.remove("valid-drop-target");
    });

    console.log("Target Square:", targetSquare.id);

    currentPlayer = currentPlayer === "white" ? "black" : "white";
  }
}

export { boardGeneration };
