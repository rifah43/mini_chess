// const constant = require('./constant.js');
// const pieces_move = require('./moveFunction/pieces_move.js');

import * as constant from './constant.js'
import * as pieces_move from './moveFunction/pieces_move.js'

function isItCheckMate(board, kingName) {
    if (kingName == constant.COMPUTER_KING) {
        if (pieces_move.getAllComputersMoves(board) == null) {
            console.log("Checkmate!!!");
            return true;
        }
        else {
            return false;
        }
    }
    else if (kingName == constant.PLAYER_KING){
        if (pieces_move.getAllPlayersMoves(board) == null) {
            console.log("Checkmate!!!");
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.log("Invalid king's name")
        return  null;
    }
}

// module.exports = {
//     isItCheckMate
// }

export{
    isItCheckMate
}
