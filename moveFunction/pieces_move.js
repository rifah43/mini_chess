import * as pawns_moves from './pawns_move.js';
import * as rooks_moves from './rooks_move.js';
import * as bishops_moves from './bishops_move.js';
import * as kings_moves from './kings_move.js';

const pawns_move = pawns_moves.move;
const rooks_move = rooks_moves.move;
const bishops_move = bishops_moves.move;
const kings_move = kings_moves.move;

export {
    pawns_move,
    rooks_move,
    bishops_move,
    kings_move
}