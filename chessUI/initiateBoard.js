import { setPieceIcon } from "./placeIcons.js";
import { pieceInfo,generatePieceInfo } from "./layout.js";
// import { getMoveList } from "./moveList.js";
import {getAllMovesForA_Position} from "../chess_game/chess_game.js";
import {evaluateBoard} from "./evaluation.js";

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
      generatePieceInfo(board)
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
    console.log("index= ",  parseInt(nums[0]), parseInt(nums[1]))
    possibleMoves = getAllMovesForA_Position(board, parseInt(nums[0]), parseInt(nums[1]));
    console.log(possibleMoves)
    for (const move of possibleMoves) {
      console.log(move);
      const targetSquare = document.getElementById(
        `${move.nextPosition.y},${move.nextPosition.x}`
      );
      if (targetSquare) {
        targetSquare.classList.add("valid-drop-target");
        targetSquare.style.backgroundColor = "green";
        targetSquare.addEventListener("click", handleValidSquareClick);
      }
    }
  }
}

function handleValidSquareClick(e) {
  const targetSquare = e.target;
  targetSquare.textContent = ""
  if (targetSquare.classList.contains("black")) {
    targetSquare.style.backgroundColor = "rgb(202, 33, 33)";
  } else {
    targetSquare.style.backgroundColor = "rgb(235, 254, 226)";
  }
  const sourceSquare = selectedPiece.parentElement;
  const sourcePos = sourceSquare.id.split(",");
  const targetPos = targetSquare.id.split(",");

  const sourceRow = parseInt(sourcePos[0]);
  const sourceCol = parseInt(sourcePos[1]);
  const targetRow = parseInt(targetPos[0]);
  const targetCol = parseInt(targetPos[1]);

  board[targetRow][targetCol] = board[sourceRow][sourceCol];
  board[sourceRow][sourceCol] = null;

  targetSquare.appendChild(selectedPiece);

selectedPiece = null;
  clearValidMoveSquares();
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  console.log(currentPlayer);
  console.log(board);
  console.log(evaluateBoard(board));
}

function clearValidMoveSquares() {
  const validSquares = document.querySelectorAll(".valid-drop-target");
  validSquares.forEach((square) => {
    if (square.classList.contains("black")) {
      square.style.backgroundColor = "rgb(202, 33, 33)";
    } else {
      square.style.backgroundColor = "rgb(235, 254, 226)";
    }
    square.classList.remove("valid-drop-target");
    square.removeEventListener("click", handleValidSquareClick);
  });
}

function highlightValidMoveSquares(piece) {
  const sourceSquare = piece.parentElement;
  const nums = sourceSquare.id.split(",");
  let possibleMoves = getAllMovesForA_Position(board, parseInt(nums[0]), parseInt(nums[1]));

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
