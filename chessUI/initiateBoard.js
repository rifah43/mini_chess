import { setPieceIcon } from "./placeIcons.js";
import { pieceInfo, generatePieceInfo, findKing, isStalemate } from "./layout.js";
import { getAllMovesForA_Position, getAllComputersMoves } from "../chess_game/chess_game.js";
import { isItCheck } from "../chess_game/moveFunction/kingsSafety.js";
import { evaluateBoard } from "./evaluation.js";
import { makeAIMove } from "./movement.js";
import { isItCheckMate } from "../chess_game/checkMateChecker.js";

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

function letMove() {
  if(isItCheckMate(board) || isStalemate(board)){
    alert("Game Over! ");
    return;
  }
  const pieces = document.querySelectorAll(".piece");
  const squares = document.querySelectorAll(".square");

  pieces.forEach((piece) => {
    piece.addEventListener("click", handlePieceClick);
  });

  squares.forEach((square) => {
    square.addEventListener("click", handleSquareClick);
  });
}

function handlePieceClick(e) {
  evaluation += evaluateBoard(board);
 // console.log(`Board evaluation: ${evaluation}`);
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
    if (!possibleMoves || possibleMoves.length === 0) {
      alert("This piece has no possible moves!")
      return;
    }
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

  board[targetRow][targetCol] = board[sourceRow][sourceCol];
  board[sourceRow][sourceCol] = null;

  targetSquare.appendChild(selectedPiece);
  selectedPiece = null;
  clearValidMoveSquares();
  console.log(board);
  if(isItCheckMate(board) ){
    alert("Game Over! Checkmate by "+currentPlayer);
    return;
  }
  if(isStalemate(board)){
    alert("Game Over! No more moves");
    return;
  }
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  if (currentPlayer === "black") {
    ({ board, currentPlayer } = makeAIMove(board, currentPlayer));;
  }
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

  if (!possibleMoves || possibleMoves.length === 0) {
    alert("This piece has no possible moves!")
    return;
  }

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
