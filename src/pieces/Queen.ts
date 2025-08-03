import { ChessPiece } from './ChessPiece';
import { nextMove, directions, validateCell } from '../utils/board';

export class Queen implements ChessPiece {
  getMoves(pos: string): string[] {
    validateCell(pos);
    const moves: string[] = [];
    for (const [dx, dy] of [
      ...directions.vertical,
      ...directions.horizontal,
      ...directions.diagonal,
    ]) {
      let next = pos;
      while (true) {
        const moved = nextMove(next, dx, dy);
        if (!moved) break;
        moves.push(moved);
        next = moved;
      }
    }
    return moves;
  }
}
