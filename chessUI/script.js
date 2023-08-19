import { boardGeneration } from "./initiateBoard.js";

const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

let white = true;
let letter = "ABCDEFGH";

  boardGeneration(white,gameboard);
  
  for (let index = 1; index <= 8; index++) {
    let numberList = document.createElement("li");
    numberList.textContent = index;
    numbers.appendChild(numberList);
  
    let textList = document.createElement("li");
    textList.textContent = letter[index - 1];
    letters.appendChild(textList);
  }