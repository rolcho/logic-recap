'use strict';

//creation
function createMatrix(matrixSize: number): number[][] {
  let matrixRow: number[][] = [];

  for (let i = 0; i < matrixSize; i++) {
    let matrixColumns: number[] = [];
    for (let j = 0; j < matrixSize; j++) {
      matrixColumns.push(Math.floor(Math.random() * 10));
    }
    matrixRow.push(matrixColumns);
  }
  return matrixRow;
}

//basic
function printMatrix(matrix: number[][]): string {
  const matrixSize: number = matrix.length;
  let matrixToPrint: string = '';

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      matrixToPrint += `${matrix[i][j]} `;
    }
    matrixToPrint += '\n';
  }

  return matrixToPrint;
}

function diagonalSum(matrix: number[][]): number {
  const matrixSize: number = matrix.length;
  let diagonalSumValue: number = 0;

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (i === j) {
        diagonalSumValue += matrix[i][j];
      }
    }
  }

  return diagonalSumValue;
}

function diagonalDifference(matrix: number[][]): number {
  const matrixSize: number = matrix.length;
  let diagonalDifferenceValue: number = 0;

  let diagonalSumFromLeft: number = 0;

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (i === j) {
        diagonalSumFromLeft += matrix[i][j];
      }
    }
  }

  let diagonalSumFromRight: number = 0;

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (i === j) {
        diagonalSumFromRight += matrix[i][matrixSize - 1 - j];
      }
    }
  }

  diagonalDifferenceValue = Math.abs(
    diagonalSumFromLeft - diagonalSumFromRight
  );

  return diagonalDifferenceValue;
}

//intermediate
function printMatrixForOf(matrix: number[][]): string {
  let matrixToPrint: string = '';

  for (let matrixRow of matrix) {
    for (let matrixColumn of matrixRow) {
      matrixToPrint += `${matrixColumn} `;
    }
    matrixToPrint += `\n`;
  }

  return matrixToPrint;
}

function diagonalSumOneLoop(matrix: number[][]): number {
  let diagonalSumValue: number = 0;

  for (let i = 0; i < matrixSize; i++) {
    diagonalSumValue += matrix[i][i];
  }

  return diagonalSumValue;
}

function diagonalDifferenceOneLoop(matrix: number[][]): number {
  let diagonalDifferenceValue: number = 0;
  let diagonalSumFromLeft: number = 0;
  let diagonalSumFromRight: number = 0;

  for (
    let matrixDiagonal = 0;
    matrixDiagonal < matrix.length;
    matrixDiagonal++
  ) {
    diagonalSumFromLeft += matrix[matrixDiagonal][matrixDiagonal];
    diagonalSumFromRight +=
      matrix[matrixDiagonal][matrix.length - 1 - matrixDiagonal];
  }

  diagonalDifferenceValue = Math.abs(
    diagonalSumFromLeft - diagonalSumFromRight
  );

  return diagonalDifferenceValue;
}

//advanced
function printMatrixInline(matrix: number[][]): string {
  let matrixToPrint: string = '';

  matrix.forEach((matrixLine) => {
    matrixLine.forEach((matrixColumn) => (matrixToPrint += `${matrixColumn} `));
    matrixToPrint += `\n`;
  });

  return matrixToPrint;
}

function diagonalSumInline(matrix: number[][]): number {
  let diagonalSumValue: number = 0;

  matrix.forEach(
    (matrixRow, diagonalIndex) => (diagonalSumValue += matrixRow[diagonalIndex])
  );

  return diagonalSumValue;
}

function diagonalDifferenceInline(matrix: number[][]): number {
  let diagonalDifference: number = 0;

  matrix.forEach(
    (matrixRow, diagonalIndex) =>
      (diagonalDifference +=
        matrixRow[diagonalIndex] -
        matrixRow[matrixRow.length - 1 - diagonalIndex])
  );

  return Math.abs(diagonalDifference);
}

const matrixSize: number = 5;
const matrix: number[][] = createMatrix(matrixSize);

console.log(`Simple for cycle print:\n${printMatrix(matrix)}`);
console.log(`For of print:\n${printMatrixForOf(matrix)}`);
console.log(`Inline print:\n${printMatrixInline(matrix)}`);

console.log(`Diagonal sum: ${diagonalSum(matrix)}`);
console.log(`Diagonal sum one loop: ${diagonalSumOneLoop(matrix)}`);
console.log(`Diagonal sum inline: ${diagonalSumInline(matrix)}\n`);

console.log(`Diagonal difference: ${diagonalDifference(matrix)}`);
console.log(
  `Diagonal difference one loop: ${diagonalDifferenceOneLoop(matrix)}`
);
console.log(
  `Diagonal difference inline: ${diagonalDifferenceInline(matrix)}\n`
);
