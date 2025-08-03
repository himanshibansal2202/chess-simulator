import { ChessPiece } from './ChessPiece.js';
import { nextMove, directions } from '../utils/board.js';

export class Queen implements ChessPiece {
  getMoves(pos: string): string[] {
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
