import { King } from '../src/pieces/King';

describe('King', () => {
  let king: King;

  beforeEach(() => {
    king = new King();
  });

  it('returns all valid adjacent moves from D5', () => {
    const moves = king.getMoves('D5').sort();
    expect(moves).toEqual(
      ['C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6'].sort()
    );
  });

  it('throws an error for invalid cell', () => {
    expect(() => king.getMoves('Z9')).toThrow('Invalid cell position: Z9');
  });
});
