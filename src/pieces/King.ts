import { ChessPiece } from './ChessPiece';
import { nextMove, directions, validateCell } from '../utils/board';

export class King implements ChessPiece {
  getMoves(pos: string): string[] {
    validateCell(pos);
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
