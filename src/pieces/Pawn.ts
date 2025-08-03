import { ChessPiece } from './ChessPiece';
import { nextMove, validateCell } from '../utils/board';

export class Pawn implements ChessPiece {
  getMoves(pos: string): string[] {
    validateCell(pos);
    const next = nextMove(pos, 0, 1);
    return next ? [next] : [];
  }
}
