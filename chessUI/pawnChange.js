import { getBoard, setBoard } from "./initiateBoard.js";
import { setPieceIcon } from "./placeIcons.js";

function changePawnToQueen(positionY, positionX, player) {
    let board = getBoard();
    board[positionY][positionX] = null;
    let color = null;
    var queen_name = null;
    if (player == "player") {
        color = "white";
        queen_name = "p_qu";
    }
    else {
        color = "black";
        queen_name = "c_qu";
    }

    const piece = document.getElementById( `${positionY},${positionX}`).firstChild;
    const pieceId = color + "_queen";
    const square = document.getElementById( `${positionY},${positionX}`);
    if(square.firstChild!=null){
        square.removeChild(piece);
    }
    let piece1 = document.createElement("div");
        piece1.classList.add("piece");
        piece1.id = pieceId;
        console.log(pieceId, piece1 );
        setPieceIcon(piece1, pieceId);
        square.appendChild(piece1);

    board[positionY][positionX] = queen_name;
    setBoard(board);
}

export { changePawnToQueen };