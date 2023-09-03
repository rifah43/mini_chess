const BOARD_WIDTH = 5;
const BOARD_LENGTH = 6;
const PLAYER_PAWN = 'p_pa1';
const COMPUTER_PAWN = 'c_pa1';
const [PLAYER_ROOK, COMPUTER_ROOK] = ['p_ro', 'c_ro'];
const [PLAYER_BISHOP, COMPUTER_BISHOP] = ['p_bi', 'c_bi'];
const [PLAYER_KING, COMPUTER_KING] = ['p_ki', 'c_ki'];
const [PLAYER_QUEEN, COMPUTER_QUEEN] = ['p_qu', 'c_qu'];
const [PLAYER_KNIGHT, COMPUTER_KNIGHT] = ['p_kn', 'c_kn'];

// priority of killing
const KING_PRIORITY = Number.MAX_SAFE_INTEGER;
const ROOK_PRIORITY = 10;
const BISHOP_PRIORITY = 12;
const QUEEN_PRIORITY = 30;
const KNIGHT_PRIORITY = 8;
const PAWN_PRIORITY = 2;
const FREE_SPACE = 1;



export {
  BOARD_WIDTH,
  BOARD_LENGTH,

  PLAYER_PAWN,
  COMPUTER_PAWN,
  PLAYER_ROOK, COMPUTER_ROOK,
  PLAYER_BISHOP, COMPUTER_BISHOP,
  PLAYER_KING, COMPUTER_KING,
  PLAYER_QUEEN, COMPUTER_QUEEN,
  PLAYER_KNIGHT, COMPUTER_KNIGHT,

  KING_PRIORITY,
  ROOK_PRIORITY,
  BISHOP_PRIORITY,
  QUEEN_PRIORITY,
  KNIGHT_PRIORITY,
  PAWN_PRIORITY,
  FREE_SPACE
};




