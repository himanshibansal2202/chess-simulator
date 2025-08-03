import { Pawn } from '../src/pieces/Pawn';

describe('Pawn', () => {
  let pawn: Pawn;
  beforeEach(() => {
    pawn = new Pawn();
  });
  it('moves one step forward from E2', () => {
    const pawn = new Pawn();
    expect(pawn.getMoves('E2')).toEqual(['E3']);
  });

  it('cannot move forward from E8', () => {
    const pawn = new Pawn();
    expect(pawn.getMoves('E8')).toEqual([]);
  });

  it('throws an error for invalid cell', () => {
    expect(() => pawn.getMoves('Z0')).toThrow('Invalid cell position: Z0');
  });
});
