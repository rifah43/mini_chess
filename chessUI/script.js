import { boardGeneration } from "./initiateBoard.js";

const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

import { initialize } from "../board.js";
import * as kingsSafety from '../moveFunction/kingsSafety.js';

let white = true;
let letter = "ABCDEFGH";

// Testing By Muktadul
import * as Board from '../board.js';
import * as pieces_move from '../moveFunction/pieces_move.js';

const board1 = Board.initialize();
Board.printBoard(board1);

// Board.printAllMoves(board1, pieces_move.getAllMovesForA_Position(board, 3, 2))
Board.printAllMoves(board1, pieces_move.getAllComputersMoves(board1))
// Testing End

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