import { King } from './pieces/King';
import { Queen } from './pieces/Queen';
import { Pawn } from './pieces/Pawn';
import { ChessPiece } from './pieces/ChessPiece';

export class PieceFactory {
  static create(type: string): ChessPiece {
    switch (type.toLowerCase()) {
      case 'king':
        return new King();
      case 'queen':
        return new Queen();
      case 'pawn':
        return new Pawn();
      default:
        throw new Error(`Invalid piece type: ${type}`);
    }
  }
}
