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

function drawLine(
  startPoint: Point,
  length: number,
  degree: number,
  strength: number,
  ctx: CanvasRenderingContext2D
): Point {
  //calculating line endpoint
  const xCount: number = Math.cos(((Math.PI * 2) / 360) * degree) * length;
  const yCount: number = Math.sin(((Math.PI * 2) / 360) * -degree) * length;
  const endPoint: Point = new Point(
    startPoint.getX() + xCount,
    startPoint.getY() + yCount
  );

  ctx.beginPath();
  ctx.moveTo(startPoint.getX(), startPoint.getY());
  ctx.lineTo(startPoint.getX() + xCount, yCount + startPoint.getY());
  ctx.strokeStyle = 'white';
  ctx.lineWidth = strength;
  ctx.stroke();

  //returning endpoint for further operation
  return endPoint;
}

function drawTree(
  level: number,
  startPoint: Point,
  degree: number,
  length: number,
  ctx: CanvasRenderingContext2D
) {
  // setting up default tree characteristic
  const branchDegree: number = 25;
  const growLimit: number = 0.8;

  //draw one branch and after that calls the branchgrowing three times, if its not the last one
  const endPoint: Point = drawLine(startPoint, length, degree, level + 1, ctx);
  if (level > 0) {
    drawTree(
      level - 1,
      endPoint,
      degree - branchDegree,
      length * growLimit,
      ctx
    );
    drawTree(level - 1, endPoint, degree, length * growLimit, ctx);
    drawTree(
      level - 1,
      endPoint,
      degree + branchDegree,
      length * growLimit,
      ctx
    );
  }
}

// setting up initial values
const initialGrowingPoint: Point = new Point(
  canvas.width / 2,
  canvas.height - 10
);
const initialGrowingDegree: number = 90;
const initialGrowingDistance = canvas.height / 5;
const initialGrowingLevels = 8;
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
