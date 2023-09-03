import { boardGeneration } from "./initiateBoard.js";

const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

import { initialize } from "../board.js";
import * as constant from "../constant.js";
import * as kingsSafety from '../moveFunction/kingsSafety.js';

let white = true;
let letter = "ABCDEFGH";
console.log("Hi I'am Muktadul Islam")

const upperPlayers = [constant.PLAYER_UPPER, constant.COMPUTER_UPPER]; 
console.log(upperPlayers,"kkk");
const randomUpperPlayer = upperPlayers[Math.floor(Math.random() * upperPlayers.length)];
console.log(randomUpperPlayer,"iiii");

const UpperPlayerName = randomUpperPlayer;

const board = initialize(UpperPlayerName);
kingsSafety.isThisMoveSafeForKing(board, constant.PLAYER_KING,randomUpperPlayer);

boardGenerationAndPopulate(white);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    location.reload();
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