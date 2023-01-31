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

let originalMatrix: number[][] = createMatrix(5);

console.log(originalMatrix);
// console.log(originalMatrix[2][2]);

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

function changeNumbers(matrix: number[][], from: number, to: number) {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[row][column] === from) {
        matrix[row][column] = to;
      }
    }
  }
}

function changeNumbersIntoNewArray(
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
  return returnMatrix;
}

console.log('The original matrix:');
console.log(printMatrix(originalMatrix));

console.log('Change numbers (3->0) in matrix into a new matrix:');
const changedMatrix = changeNumbersIntoNewArray(originalMatrix, 3, 0);
console.log(printMatrix(changedMatrix));

console.log('The original matrix:');
console.log(printMatrix(originalMatrix));

console.log('Change numbers (6->9) in the original matrix:');
changeNumbers(originalMatrix, 6, 9);
console.log(printMatrix(originalMatrix));
