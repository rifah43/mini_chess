// import { move as bishops_move } from "../moveFunction/bishops_move.js";
// import { move as pawns_move } from "../moveFunction/pawns_move.js";
// import { move as knights_move } from "../moveFunction/knights_move.js";
// import { move as rooks_move } from "../moveFunction/rooks_move.js";
// import { move as queens_move } from "../moveFunction/queens_move.js";
// import { move as kings_move } from "../moveFunction/kings_move.js";

import { getAllComputersMoves, getAllPlayerMoves } from "../chess_game/chess_game";

// It must be updated by "chess_game.getAllComputersMoves()" or "chess_game.isItCheck()" or "chess_game.isItCheckMate"


function getMoveList(selectedPiece,board,nums){
    // if (selectedPiece.id.endsWith("bishop")) {
    //     return bishops_move(board, nums[0], nums[1]);
    //   } else if (selectedPiece.id.endsWith("pawn")) {
    //     console.log("pawn");
    //     console.log(pawns_move(board, nums[0], nums[1]));
    //     return pawns_move(board, nums[0], nums[1]);
    //   } else if (selectedPiece.id.endsWith("knight")) {
    //     console.log("knight");
    //     return knights_move(board, nums[0], nums[1]);
    //   } else if (selectedPiece.id.endsWith("rook")) {
    //     console.log("rook");
    //     return rooks_move(board, nums[0], nums[1]);
    //   } else if (selectedPiece.id.endsWith("queen")) {
    //     console.log("queen");
    //     return queens_move(board, nums[0], nums[1]);
    //   }
    //   else if (selectedPiece.id.endsWith("king")) {
    //     console.log("king");
    //     return kings_move(board, nums[0], nums[1]);
    //   }
}

export{getMoveList}