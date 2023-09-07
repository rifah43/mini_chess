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
      console.log(square);

      if (square === null) continue;

      const [color, piece] = square.split('_');
      const pieceValue = pieceValues[piece];

      if (color === 'p') {
        totalEvaluation += pieceValue;
      } else {
        totalEvaluation -= pieceValue;
      }
    }
  }

  return totalEvaluation;
}

export { evaluateBoard };