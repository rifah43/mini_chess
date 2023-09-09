import { setPieceIcon } from "./placeIcons.js";
import { pieceInfo, generatePieceInfo, findKing } from "./layout.js";
import { getAllMovesForA_Position, getAllComputersMoves } from "../chess_game/chess_game.js";
import { isItCheck } from "../chess_game/moveFunction/kingsSafety.js";
import { evaluateBoard } from "./evaluation.js";
import { makeAIMove } from "./movement.js";

let selectedPiece = null;
let currentPlayer = "white";
let board = null;
let evaluation = parseInt(0);

function initializeBoard(white, gameboard, bb) {
  board = bb;
  initializeGameboard(white, gameboard);
}

function initializeGameboard(white, gameboard) {
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
        let piece = document.createElement("div");
        piece.classList.add("piece");
        piece.id = pieceId;

        setPieceIcon(piece, pieceId);
        square.appendChild(piece);
      }
      gameboard.appendChild(square);
    }
  }
}

function letMove(currentPlayer) {
  const pieces = document.querySelectorAll(".piece");
  const squares = document.querySelectorAll(".square");

  pieces.forEach((piece) => {
    piece.removeEventListener("click", handlePieceClick); // Remove previous event listeners
  });

  squares.forEach((square) => {
    square.removeEventListener("click", handleSquareClick); // Remove previous event listeners
  });

  // if (currentPlayer === "white") {
    pieces.forEach((piece) => {
      piece.addEventListener("click", handlePieceClick);
    });

    squares.forEach((square) => {
      square.addEventListener("click", handleSquareClick);
    });
    console.log(board, " wmove");
  // } else {
  //   ({ board, currentPlayer } = makeAIMove(board, currentPlayer));
  //   letMove(currentPlayer);
  // }
}

function handlePieceClick(e) {
  evaluation += evaluateBoard(board);
  const king = findKing(board, currentPlayer);
  if (isItCheck(board, king)[0]) {
    alert(`${currentPlayer} king is on check!`);
  }
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
    let possibleMoves = [];
    possibleMoves = getAllMovesForA_Position(board, parseInt(nums[0]), parseInt(nums[1]));
    if (!possibleMoves) {
      alert("This piece has no possible moves!")
    }
    console.log(possibleMoves);
    for (const move of possibleMoves) {
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
  targetSquare.textContent = null;
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
  console.log(board, "b swapped");
  board[targetRow][targetCol] = board[sourceRow][sourceCol];
  board[sourceRow][sourceCol] = null;
  console.log(board, " swapped");

  targetSquare.appendChild(selectedPiece);
  selectedPiece = null;
  clearValidMoveSquares();
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  letMove(currentPlayer);
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

export { initializeBoard, letMove };
