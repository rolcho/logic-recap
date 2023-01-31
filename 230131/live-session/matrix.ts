'use strict';

//creation
function createMatrix(matrixSize: number): number[][] {
  const matrix: number[][] = [];

  for (let i = 0; i < matrixSize; i++) {
    const matrixRow: number[] = [];
    for (let j = 0; j < matrixSize; j++) {
      matrixRow.push(Math.floor(Math.random() * 10));
    }
    matrix.push(matrixRow);
  }

  return matrix;
}

let myNewMatrix: number[][] = createMatrix(5);

console.log(myNewMatrix);
// console.log(myNewMatrix[2][2]);

//basic
function printMatrix(matrix: number[][]): string {
  let returnMatrixString: string = '';

  for (let row = 0; row < matrix.length; row++) {
    let stringRow: string = '';
    for (let column = 0; column < matrix.length; column++) {
      stringRow += `${matrix[row][column]} `;
    }
    returnMatrixString += `${stringRow}\n`;
  }

  return returnMatrixString;
}

function diagonalSum(matrix: number[][]): number {
  let diagonalSumValue: number = 0;

  for (
    let diagolnalValue = 0;
    diagolnalValue < matrix.length;
    diagolnalValue++
  ) {
    diagonalSumValue += matrix[diagolnalValue][diagolnalValue];
  }

  return diagonalSumValue;
}

function diagonalDifference(matrix: number[][]): number {
  let diagonalDifferenceValue: number = 0;

  for (
    let diagolnalValue = 0;
    diagolnalValue < matrix.length;
    diagolnalValue++
  ) {
    diagonalDifferenceValue +=
      matrix[diagolnalValue][diagolnalValue] -
      matrix[diagolnalValue][matrix.length - 1 - diagolnalValue];
  }

  return Math.abs(diagonalDifferenceValue);
}

function changeNumbers(
  matrix: number[][],
  from: number,
  to: number
): number[][] {
  const returnMatrix: number[][] = [];

  for (let row = 0; row < matrix.length; row++) {
    const matrixRow: number[] = [];
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[row][column] === from) {
        matrixRow.push(to);
      } else matrixRow.push(matrix[row][column]);
    }
    returnMatrix.push(matrixRow);
  }
  from = 1212;
  return returnMatrix;
}

console.log(printMatrix(myNewMatrix));
const changedMatrix = changeNumbers(myNewMatrix, 3, 0);

console.log(printMatrix(changedMatrix));
myNewMatrix = changedMatrix;
console.log(printMatrix(myNewMatrix));
