import { Queen } from '../src/pieces/Queen';

describe('Queen', () => {
  let queen: Queen;
  beforeEach(() => {
    queen = new Queen();
  });
  it('returns all valid moves from D4', () => {
    const moves = queen.getMoves('D4');
    expect(moves).toContain('D1');
    expect(moves).toContain('H4');
    expect(moves).toContain('A1');
    expect(moves).toContain('G7');
    expect(moves.length).toBeGreaterThan(20);
  });

  it('throws an error for invalid cell', () => {
    expect(() => queen.getMoves('I5')).toThrow('Invalid cell position: I5');
  });
});
