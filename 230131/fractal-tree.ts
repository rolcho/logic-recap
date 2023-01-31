'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  setXY(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

  getX(): number {
    return this._x;
  }

  getY(): number {
    return this._y;
  }
}

function endPointCalulator(
  startPoint: Point,
  length: number,
  degree: number
): Point {
  //calculating line endpoint
  const xShift: number = Math.cos(((Math.PI * 2) / 360) * degree) * length;
  const yShift: number = Math.sin(((Math.PI * 2) / 360) * -degree) * length;

  const endPoint: Point = new Point(
    startPoint.getX() + xShift,
    startPoint.getY() + yShift
  );

  return endPoint;
}

function drawLine(
  startPoint: Point,
  endPoint: Point,
  lineWidth: number,
  ctx: CanvasRenderingContext2D
) {
  ctx.beginPath();
  ctx.moveTo(startPoint.getX(), startPoint.getY());
  ctx.lineTo(endPoint.getX(), endPoint.getY());
  ctx.strokeStyle = 'white';
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function drawTree(
  level: number,
  startPoint: Point,
  degree: number,
  length: number,
  ctx: CanvasRenderingContext2D
) {
  // setting up default tree characteristic
  const branchDegree: number = 20;
  const growLimit: number = 0.8;
  const branchEndPoint: Point = endPointCalulator(startPoint, length, degree);

  //calls the branchgrowing five times, if its not the last one

  if (level !== 0) {
    drawTree(
      level - 1,
      branchEndPoint,
      degree - branchDegree * 2 - 10,
      length * growLimit,
      ctx
    );
    drawTree(
      level - 1,
      branchEndPoint,
      degree - branchDegree - 5,
      length * growLimit,
      ctx
    );
    drawTree(level - 1, branchEndPoint, degree, length * growLimit, ctx);
    drawTree(
      level - 1,
      branchEndPoint,
      degree + branchDegree + 5,
      length * growLimit,
      ctx
    );
    drawTree(
      level - 1,
      branchEndPoint,
      degree + branchDegree * 2 + 10,
      length * growLimit,
      ctx
    );
  }

  //draws a branch
  drawLine(startPoint, branchEndPoint, level + 1, ctx);

  //if it is the last branch, draws a leaf
  if (level === 0) {
    ctx.beginPath();
    ctx.fillStyle = 'darkgreen';
    ctx.arc(branchEndPoint.getX(), branchEndPoint.getY(), 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

// setting up initial values
const initialGrowingPoint: Point = new Point(
  canvas.width / 2,
  canvas.height - 10
);
const initialGrowingDegree: number = 90;
const initialGrowingDistance = canvas.height / 5;
const initialGrowingLevels = 5;
ctx.beginPath();
ctx.fillStyle = 'midnightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// calling the tree
drawTree(
  initialGrowingLevels,
  initialGrowingPoint,
  initialGrowingDegree,
  initialGrowingDistance,
  ctx
);
