'use strict';

//creation
function createMatrix(matrixMatrixSize: number): number[][] {
  let matrixRow: number[][] = [];

  for (let i = 0; i < matrixMatrixSize; i++) {
    let matrixColumns: number[] = [];
    for (let j = 0; j < matrixMatrixSize; j++) {
      matrixColumns.push(Math.floor(Math.random() * 10));
    }
    matrixRow.push(matrixColumns);
  }
  return matrixRow;
}

//basic
function printMatrix(matrix: number[][]): string {
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

const matrixSize: number = 5;
const matrix: number[][] = createMatrix(matrixSize);

console.log(`Simple for cycle print:\n${printMatrix(matrix)}`);

console.log(`For of print:\n${printMatrixForOf(matrix)}`);

console.log(`Inline print:\n${printMatrixInline(matrix)}`);

console.log(`Diagonal sum: ${diagonalSum(matrix)}`);

console.log(`Diagonal sum one loop: ${diagonalSumOneLoop(matrix)}`);

console.log(`Diagonal sum inline: ${diagonalSumInline(matrix)}`);
