import { setPieceIcon } from "./placeIcons.js";
import { pieceInfo } from "./layout.js";
import { getMoveList } from "./moveList.js";

let selectedPiece = null;
let currentPlayer = "white";
let board = null;

function boardGeneration(white, gameboard, bb) {
  board = bb;
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

        piece.addEventListener("click", handlePieceClick);
      }

      square.addEventListener("click", handleSquareClick);

      gameboard.appendChild(square);
    }
  }
}

function handlePieceClick(e) {
  const pieceColor = e.target.id.startsWith("white") ? "white" : "black";

  if (pieceColor === currentPlayer) {
    selectedPiece = e.target;
    clearValidMoveSquares();
    highlightValidMoveSquares(selectedPiece);
  } else {
    e.preventDefault();
  }
}

function handleSquareClick(e) {
  if (selectedPiece) {
    const sourceSquare = selectedPiece.parentElement;
    const nums = sourceSquare.id.split(",");
    console.log(nums);

    let possibleMoves = [];
    possibleMoves = getMoveList(selectedPiece, board, nums);
    for (const move of possibleMoves) {
      console.log(move);
      const targetSquare = document.getElementById(
        `${move.nextPosition.y},${move.nextPosition.x}`
      );
      if (targetSquare) {
        targetSquare.classList.add("valid-drop-target");
        targetSquare.textContent = "#";
        targetSquare.addEventListener("click", handleValidSquareClick);
      }
    }
  }
}

function handleValidSquareClick(e) {
  const targetSquare = e.target;
  targetSquare.textContent = ""

  targetSquare.appendChild(selectedPiece);
  selectedPiece = null;
  clearValidMoveSquares();
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  console.log(currentPlayer);
}

function clearValidMoveSquares() {
  const validSquares = document.querySelectorAll(".valid-drop-target");
  validSquares.forEach((square) => {
    square.classList.remove("valid-drop-target");
    square.removeEventListener("click", handleValidSquareClick);
  });
}

function highlightValidMoveSquares(piece) {
  const sourceSquare = piece.parentElement;
  const nums = sourceSquare.id.split(",");
  let possibleMoves = getMoveList(piece, board, nums);

  for (const move of possibleMoves) {
    const targetSquare = document.getElementById(
      `${move.nextPosition.y},${move.nextPosition.x}`
    );
    if (targetSquare) {
      targetSquare.classList.add("valid-drop-target");
      targetSquare.addEventListener("click", handleValidSquareClick);
    }
  }
}

export { boardGeneration };
