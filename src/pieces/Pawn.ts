import { ChessPiece } from './ChessPiece.js';
import { nextMove } from '../utils/board.js';

export class Pawn implements ChessPiece {
  getMoves(pos: string): string[] {
    const next = nextMove(pos, 0, 1);
    return next ? [next] : [];
  }
}
