import { boardGeneration } from "./initiateBoard.js";

const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

import { initializeBoard as initialize } from '../chess_game/chess_game.js';

let white = true;
let letter = "ABCDEFGH";

// // Testing By Muktadul
// import * as chess_game from '../chess_game/chess_game.js';

// const board1 = chess_game.initializeBoard();
// chess_game.printBoard(board1);

// // chess_game.printAllMoves(board1, chess_game.getAllMovesForA_Position(board1, 3, 2))
// chess_game.printAllMoves(board1, chess_game.getAllComputersMoves(board1))
// // Testing End

const board = initialize();

boardGenerationAndPopulate(white);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    location.reload();
}

function boardGenerationAndPopulate(white) {
    boardGeneration(white, gameboard,board);
    
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