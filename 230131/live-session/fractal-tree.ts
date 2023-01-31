'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function drawLine(
  startPoint: Point,
  length: number,
  degree: number,
  level: number,
  ctx: CanvasRenderingContext2D
): Point {
  const xCount: number = Math.cos(((Math.PI * 2) / 360) * degree) * length;
  const yCount: number = Math.sin(((Math.PI * 2) / 360) * -degree) * length;

  const endPoint: Point = new Point(
    startPoint.x + xCount,
    startPoint.y + yCount
  );

  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = level;
  ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  ctx.stroke();

  return endPoint;
}

function drawTree(
  level: number,
  startPoint: Point,
  degree: number,
  length: number,
  ctx: CanvasRenderingContext2D
) {
  const branchDegre: number = 30;
  const growLimit: number = 0.8;

  const endPoint: Point = drawLine(startPoint, length, degree, level, ctx);

  if (level > 0) {
    drawTree(
      level - 1,
      endPoint,
      degree - branchDegre + 5,
      length * growLimit,
      ctx
    );
    drawTree(level - 1, endPoint, degree, length * growLimit, ctx);

    drawTree(
      level - 1,
      endPoint,
      degree + branchDegre - 5,
      length * growLimit,
      ctx
    );
  }
}

ctx.beginPath();
ctx.fillStyle = 'midnightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const treeStartPoint: Point = new Point(canvas.width / 2, canvas.height);

drawTree(8, treeStartPoint, 90, 150, ctx);
