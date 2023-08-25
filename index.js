const Board = require('./board.js');
const constant = require('./constant.js');
const kingsSafety = require('./moveFunction/kingsSafety.js')

const UpperPlayerName = constant.PLAYER_UPPER;

const board = Board.initialize(UpperPlayerName);
kingsSafety.isMoveSafeForKing(board, constant.PLAYER_KING);