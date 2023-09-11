import * as chess_game from '../chess_game/chess_game.js';
import { getPieceIcon, getPiecesName } from './placeIcons.js';

let nowPlaysTurn;
let board;
let lastSelectedMoves = [];


function initializeGameboard(board) {
    for (let row = 0; row < chess_game.constant.BOARD_LENGTH; row++) {
        for (let col = 0; col < chess_game.constant.BOARD_WIDTH; col++) {
            document.getElementById(`r` + row + `c` + col).addEventListener("click", makeMove);
            if (board[row][col] != null) {
                document.getElementById(`r` + row + `c` + col).innerHTML = getPieceIcon(board[row][col]);
            }
        }
    }
}

function startGame() {
    board = chess_game.initializeBoard();
    initializeGameboard(board)
    nowPlaysTurn = true;
}

function makeMove() {
    clearValidMoveSquares()
    if (!nowPlaysTurn) return;

    let elementById = this.id;
    let isItA_move = false;
    let positionY = parseInt(elementById[1]);
    let positionX = parseInt(elementById[3]);
    let previousPositionY, previousPositionX;

    for (let i = lastSelectedMoves.length - 1; i >= 0; i--) {
        if (lastSelectedMoves[i].nextPosition.y == positionY && lastSelectedMoves[i].nextPosition.x == positionX) {
            isItA_move = true;
            previousPositionY = lastSelectedMoves[i].currentPosition.y;
            previousPositionX = lastSelectedMoves[i].currentPosition.x;
            break;
        }
    }

    if (isItA_move) {
        nowPlaysTurn = false;
        let id1 = "r" + positionY + "c" + positionX;
        let id2 = "r" + previousPositionY + "c" + previousPositionX;

        if (board[previousPositionY][previousPositionX] == chess_game.constant.PLAYER_PAWN && positionY == 0) {
            board[positionY][positionX] = chess_game.constant.PLAYER_QUEEN;
            document.getElementById(id1).innerHTML = getPieceIcon(board[positionY][positionX]);
        }
        else {
            board[positionY][positionX] = board[previousPositionY][previousPositionX];
            document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
        }

        board[previousPositionY][previousPositionX] = null;
        document.getElementById(id2).innerHTML = '';
        lastSelectedMoves = [];

        if (chess_game.isItCheckMate(board, chess_game.constant.COMPUTER_KING)) {
            nowPlaysTurn = true;        // so that computer can't claculate it's move during this 500 milisecond
            setTimeout(function () {
                alert("Congratulations!!! You won the game....");
                location.reload();
            }, 500);
        }
    }
    else {
        let isPlayerPiece = chess_game.check_pieces.isPlayerPieces(getPiecesName(this.innerHTML));
        if (!isPlayerPiece) {
            lastSelectedMoves = [];
            return;
        }

        let allPossibleMoves = chess_game.getAllMovesForA_Position(board, positionY, positionX)

        if (allPossibleMoves == null) {
            lastSelectedMoves = [];
        }
        else {
            lastSelectedMoves = allPossibleMoves;
            highlightValidMoveSquares(allPossibleMoves);
        }
    }

    // Now it's Computer's turn to make a Move
    setTimeout(function () {
        if (!nowPlaysTurn) {
            nowPlaysTurn = !nowPlaysTurn;
            let move = chess_game.computersNextMove(board);
            let currentY = move.currentPosition.y;
            let currentX = move.currentPosition.x;
            let nextY = move.nextPosition.y;
            let nextX = move.nextPosition.x;

            let id1 = "r" + nextY + "c" + nextX;
            let id2 = "r" + currentY + "c" + currentX;

            if (board[currentY][currentX] == chess_game.constant.COMPUTER_PAWN && nextY == chess_game.constant.BOARD_LENGTH - 1) {
                board[nextY][nextX] = chess_game.constant.COMPUTER_QUEEN;
                document.getElementById(id1).innerHTML = getPieceIcon(board[nextY][nextX]);
            }
            else {
                board[nextY][nextX] = board[currentY][currentX];
                document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
            }

            board[currentY][currentX] = null;
            document.getElementById(id2).innerHTML = '';
            console.log(board)

            if (chess_game.isItCheckMate(board, chess_game.constant.PLAYER_KING)) {
                nowPlaysTurn = !nowPlaysTurn;       // so that player can't  his/her move during this 500 milisecond
                setTimeout(function () {
                    alert("Alas!!! You lost the game....");
                    location.reload();
                }, 500);
            }
            else if (chess_game.isItCheck(board, chess_game.constant.PLAYER_KING)[0]) {
                nowPlaysTurn = !nowPlaysTurn;       // so that player can't  his/her move during this 500 milisecond
                setTimeout(function () {
                    alert('Your King is on "Check"');
                }, 400);
                nowPlaysTurn = !nowPlaysTurn;
            }

        }
    }, 700);

}


function clearValidMoveSquares() {
    lastSelectedMoves.forEach((possibleMove) => {
        let id = "r" + possibleMove.nextPosition.y + "c" + possibleMove.nextPosition.x;
        if ((possibleMove.nextPosition.y + possibleMove.nextPosition.x) % 2 == 0) {
            document.getElementById(id).style.backgroundColor = 'white';
        } else {
            document.getElementById(id).style.backgroundColor = '#665d5d';
        }
    })
}


function highlightValidMoveSquares(allPossibleMoves) {
    allPossibleMoves.forEach((possibleMove) => {
        let id = "r" + possibleMove.nextPosition.y + "c" + possibleMove.nextPosition.x;
        document.getElementById(id).style.backgroundColor = 'green';
    })
}

startGame()