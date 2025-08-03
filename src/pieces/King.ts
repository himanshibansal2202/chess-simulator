import { ChessPiece } from './ChessPiece.js';
import { nextMove, directions } from '../utils/board.js';

export class King implements ChessPiece {
  getMoves(pos: string): string[] {
    const moves: string[] = [];
    for (const [dx, dy] of [
      ...directions.vertical,
      ...directions.horizontal,
      ...directions.diagonal,
    ]) {
      if (dx === 0 && dy === 0) continue;
      const next = nextMove(pos, dx, dy);
      if (next) moves.push(next);
    }
    return moves;
  }
}
