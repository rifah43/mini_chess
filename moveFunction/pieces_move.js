// const pawns_moves = require('./pawns_move.js').move;
// const rooks_moves = require('./rooks_move.js').move;
// const bishops_moves = require('./bishops_move.js').move;
// const kings_moves = require('./kings_move.js').move;
// const knights_moves = require('./knights_move.js').move;
// const queens_moves = require('./queens_move.js').move;

import { move as pawns_moves } from './pawns_move.js';
import { move as rooks_moves } from './rooks_move.js';
import { move as bishops_moves } from './bishops_move.js';
import { move as kings_moves } from './kings_move.js';
import { move as knights_moves } from './knights_move.js';
import { move as queens_moves } from './queens_move.js';

// module.exports = {
//     pawns_moves,
//     rooks_moves,
//     bishops_moves,
//     kings_moves,
//     knights_moves,
//     queens_moves
// }

export{
    pawns_moves,
    rooks_moves,
    bishops_moves,
    kings_moves,
    knights_moves,
    queens_moves
}