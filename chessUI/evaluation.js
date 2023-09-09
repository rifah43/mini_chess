import { findKing } from "./layout.js";
import { isItCheck } from "../chess_game/moveFunction/kingsSafety.js";

const pieceValues = {
  'pa': 1,
  'kn': 3,
  'bi': 3,
  'ro': 5,
  'qu': 9,
  'ki': 100
};

function evaluateBoard(board) {
  let totalEvaluation = 0;

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      const square = board[row][col];
      // Skip empty squares
      if (square === null) continue;

      const [type, piece] = square.split('_');
      const pieceValue = pieceValues[piece];

      // Ensure that type and piece are valid
      if (type && pieceValue !== undefined) {
        if (type === 'p') {
          totalEvaluation += pieceValue;
        } else {
          totalEvaluation -= pieceValue;
        }
      }
    }
  }

  const c_king = findKing(board, "white");
  const b_king = findKing(board, "black");

  const isCheckBKing = Array.isArray(isItCheck(board, b_king)) && isItCheck(board, b_king)[0];
  const isCheckCKing = Array.isArray(isItCheck(board, c_king)) && isItCheck(board, c_king)[0];

  if (isCheckBKing) {
    totalEvaluation += 2;
  }

  if (isCheckCKing) {
    totalEvaluation -= 2;
  }

  // console.log(totalEvaluation, "----");
  return parseInt(-totalEvaluation);
}

export { evaluateBoard };
