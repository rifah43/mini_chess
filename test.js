// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// const chess_game = require('./chess_game/chess_game.js');

// const constant = chess_game.constant;
// const board = chess_game.initializeBoard();
// console.log("Let's Start the Game!!!!")
// chess_game.printBoard(board);

// while(true) {
//     console.log("Enter an move:(-1 < x < 5    &   -1 < y < 6)");
//     let cx,cy, nx, ny;

//     // getting Player to select the pieces to move
//     rl.question('Select y: ', (input) => {
//         cy = parseInt(input);
//         if (isNaN(integerInput)) {
//           console.log('Invalid input. Please enter a valid integer.');
//         }
//         rl.close();
//     });
//     rl.question('Select  x: ', (input) => {
//         cx = parseInt(input);
//         if (isNaN(integerInput)) {
//           console.log('Invalid input. Please enter a valid integer.');
//         }
//         rl.close();
//     });

//     // Player's all possible move for that piece
//     console.log("Your possible moves are...",chess_game.getAllMovesForA_Position(board, cy, cx));

//     // getting Player to select the next move
//     rl.question('Next Move y: ', (input) => {
//         ny = parseInt(input);
//         if (isNaN(integerInput)) {
//           console.log('Invalid input. Please enter a valid integer.');
//         }
//         rl.close();
//     });
//     rl.question('Next Move  x: ', (input) => {
//         nx = parseInt(input);
//         if (isNaN(integerInput)) {
//           console.log('Invalid input. Please enter a valid integer.');
//         }
//         rl.close();
//     });


//     // Making the move
//     if (board[cy][cx] == constant.PLAYER_PAWN && ny == 0) {
//         // In UI Player will let to select the pieces to replace the pawn
//         board[ny][nx] = constant.PLAYER_QUEEN;
//         board[cy][cx] = null;
//     }
//     else {
//         board[ny][nx] = board[cy][cx];
//         board[cy][cx] = null;
//     }
//     console.log("After your moves the board will be...");
//     chess_game.printBoard(board);



//     // Now geting Computer moves
//     let computerMove = chess_game.computersNextMove(board);
//     cy = computerMove.currentPosition.y;
//     cx = computerMove.currentPosition.x;
//     ny = computerMove.nextPosition.y;
//     nx = computerMove.nextPosition.x;

//     if (board[cy][cx] == constant.COMPUTER_PAWN && ny == constant.BOARD_LENGTH-1) {
//         board[ny][nx] = constant.COMPUTER_QUEEN;
//         board[cy][cx] = null;
//     }
//     else {
//         board[ny][nx] = board[cy][cx];
//         board[cy][cx] = null;
//     }

//     console.log("After Computer's moves the board will be...");
//     chess_game.printBoard(board);
// }


import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chess_game = require('./chess_game/chess_game.js');
const constant = chess_game.constant;
const board = chess_game.initializeBoard();

console.log("Let's Start the Game!!!!");
chess_game.printBoard(board);

function getPlayerInput(prompt, callback) {
  rl.question(prompt, (input) => {
    const value = parseInt(input);
    if (isNaN(value)) {
      console.log('Invalid input. Please enter a valid integer.');
      getPlayerInput(prompt, callback); // Prompt again if input is invalid
    } else {
      callback(value);
    }
  });
}

function playGame() {
  getPlayerInput('Select y: ', (cy) => {
    getPlayerInput('Select x: ', (cx) => {
      console.log("Your possible moves are...", chess_game.getAllMovesForA_Position(board, cy, cx));

      getPlayerInput('Next Move y: ', (ny) => {
        getPlayerInput('Next Move x: ', (nx) => {
          if (board[cy][cx] === constant.PLAYER_PAWN && ny === 0) {
            // Player will get opption to replace the pawn
            board[ny][nx] = constant.PLAYER_QUEEN;
          } else {
            board[ny][nx] = board[cy][cx];
          }
          board[cy][cx] = null;

          console.log("After your moves the board will be...");
          chess_game.printBoard(board);

          // Now get computer's moves
          let computerMove = chess_game.computersNextMove(board);
          cy = computerMove.currentPosition.y;
          cx = computerMove.currentPosition.x;
          ny = computerMove.nextPosition.y;
          nx = computerMove.nextPosition.x;

          if (board[cy][cx] === constant.COMPUTER_PAWN && ny === constant.BOARD_LENGTH - 1) {
            
            board[ny][nx] = constant.COMPUTER_QUEEN;
          } else {
            board[ny][nx] = board[cy][cx];
          }
          board[cy][cx] = null;

          console.log("After Computer's moves the board will be...");
          chess_game.printBoard(board);

          playGame(); // Continue the game
        });
      });
    });
  });
}

playGame(); // Start the game
