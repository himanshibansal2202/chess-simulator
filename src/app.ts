import { PieceFactory } from './PieceFactory.js';
import { isValidCell } from './utils/board.js';

const [, , type, pos] = process.argv;

if (!type || !pos || !isValidCell(pos.toUpperCase())) {
  console.error('Usage: npm start -- <PieceType> <Position>');
  console.error('Example: npm start -- King D5');
  process.exit(1);
}

try {
  const piece = PieceFactory.create(type);
  const moves = piece.getMoves(pos.toUpperCase());
  console.log(moves.join(', '));
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}
