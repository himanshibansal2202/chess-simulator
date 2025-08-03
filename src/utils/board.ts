export const isValidCell = (cell: string): boolean => {
  const row = cell[0];
  const column = Number(cell[1]);
  return /^[A-H]$/.test(row) && column >= 1 && column <= 8;
};

export const directions = {
  vertical: [
    [0, 1],
    [0, -1],
  ],
  horizontal: [
    [1, 0],
    [-1, 0],
  ],
  diagonal: [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ],
};

export const nextMove = (
  cell: string,
  dx: number,
  dy: number
): string | null => {
  const x = cell.charCodeAt(0) - 65; // Using ASCII codes, convert A=65 to A=0
  const y = Number(cell[1]);
  const newX = x + dx;
  const newY = y + dy;
  if (newX < 0 || newX > 7 || newY < 1 || newY > 8) return null;
  return String.fromCharCode(65 + newX) + newY;
};
