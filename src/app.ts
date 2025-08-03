import { PieceFactory } from './PieceFactory';
import { validateCell } from './utils/board';

const [, , type, pos] = process.argv;

try {
  if (!type || !pos) {
    throw new Error(
      'Usage: npm start -- <PieceType> <Position>\nExample: npm start -- King D5'
    );
  }
  validateCell(pos.toUpperCase());
  const piece = PieceFactory.create(type);
  const moves = piece.getMoves(pos.toUpperCase());
  console.log(moves.join(', '));
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}
