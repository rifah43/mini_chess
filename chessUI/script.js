import { boardGeneration } from "./initiateBoard.js";

const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

import { initialize } from "../board.js";
import * as constant from "../constant.js";
import * as kingsSafety from '../moveFunction/kingsSafety.js';

let white = true;
let letter = "ABCDEFGH";

const upperPlayers = [constant.PLAYER_UPPER, constant.COMPUTER_UPPER]; 
console.log(upperPlayers,"kkk");
const randomUpperPlayer = upperPlayers[Math.floor(Math.random() * upperPlayers.length)];
console.log(randomUpperPlayer,"iiii");

const UpperPlayerName = randomUpperPlayer;

const board = initialize(UpperPlayerName);
kingsSafety.isMoveSafeForKing(board, constant.PLAYER_KING,randomUpperPlayer);

boardGenerationAndPopulate(white);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    gameboard.innerHTML = '';
    numbers.innerHTML = '';
    letters.innerHTML = '';

    boardGenerationAndPopulate(white);
}

function boardGenerationAndPopulate(white) {
    boardGeneration(white, gameboard);
    
    for (let index = 1; index <= 6; index++) {
        createAndAppendListItem(numbers, index);
    }

    for (let index = 1; index <= 5; index++) {
        const letterIndex = index - 1;
        const letterText = letter[letterIndex];
        createAndAppendListItem(letters, letterText);
    }
}

function createAndAppendListItem(container, text) {
    let listItem = document.createElement("li");
    listItem.textContent = text;
    container.appendChild(listItem);
}

// const squares = gameboard.querySelectorAll(".square");
// squares.forEach((square) => {
//   square.addEventListener("click", handleSquareClick);
// });

// let selectedPiece = null;

// function handleSquareClick(event) {
//   const clickedSquare = event.target;

//   if (selectedPiece === null) {
//     selectedPiece = clickedSquare.textContent; 
//     clickedSquare.style.backgroundColor = "yellow";
//   } else {
//     const targetSquare = clickedSquare.textContent; 
//     if (isValidMove(selectedPiece, targetSquare)) {
//       selectedPiece = null;
//       squares.forEach((square) => {
//         square.style.backgroundColor = "";
//       });
//     } else {
//       alert("Wrong Move!");
//     }
//   }
// }

// function isValidMove(selectedPiece, targetSquare) {
//   // Implement your Minichess movement validation logic here
//   // Check if the selectedPiece can legally move to the targetSquare
//   // Return true if valid, false if not
// }