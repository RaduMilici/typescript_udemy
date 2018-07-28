import Canvas from './Canvas';
import { Vector, Triangle, Line } from 'pulsar-pathfinding';
import {
  c_pointStroke,
  c_pointFill,
  s_point,
  c_line,
  s_line,
  c_triangleLine,
  c_triangleFill,
  s_triangle,
} from '../const/draw';
import Square from '../classes/square';

export default class Draw {
  private readonly context: CanvasRenderingContext2D;

  constructor({ context }: Canvas) {
    this.context = context;
  }

  point(
    { x, y }: Vector,
    strokeColor: string = c_pointStroke,
    fillColor: string = c_pointFill,
    size: number = s_point
  ): void {
    this.context.beginPath();
    this.context.arc(x, y, size, 0, 2 * Math.PI);
    this.context.strokeStyle = strokeColor;
    this.context.fillStyle = fillColor;
    this.context.lineWidth = 1;
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
  }

  points(
    points: Vector[],
    strokeColor?: string,
    fillColor?: string,
    size?: number
  ): void {
    points.forEach((point: Vector) => {
      this.point(point, strokeColor, fillColor, size);
    });
  }

  line({ a, b }: Line, color: string = c_line, size: number = s_line): void {
    this.context.beginPath();
    this.context.strokeStyle = color;
    this.context.lineWidth = size;
    this.context.moveTo(a.x, a.y);
    this.context.lineTo(b.x, b.y);
    this.context.stroke();
  }

  lines(lines: Line[], color?: string, size?: number): void {
    lines.forEach((line: Line) => this.line(line, color, size));
  }

  triangle(
    { lines, a, b, c }: Triangle,
    strokeColor: string = c_triangleLine,
    fillColor: string = c_triangleFill,
    size: number = s_triangle
  ): void {
    this.context.beginPath();
    this.context.moveTo(a.x, a.y);
    this.context.lineTo(b.x, b.y);
    this.context.lineTo(c.x, c.y);
    this.context.closePath();
    this.context.fillStyle = fillColor;
    this.context.fill();
    this.lines([lines.ab, lines.bc, lines.ca], strokeColor, size);
  }

  triangles(
    triangles: Triangle[],
    strokeColor?: string,
    fillColor?: string,
    size?: number
  ): void {
    triangles.forEach((triangle: Triangle) => {
      this.triangle(triangle, strokeColor, fillColor, size);
    });
  }

  square({ a, b, c, d }: Square): void {
    this.context.beginPath();
    this.context.moveTo(a.x, a.y);
    this.context.lineTo(b.x, b.y);
    this.context.lineTo(c.x, c.y);
    this.context.lineTo(d.x, d.y);
    this.context.closePath();
    this.context.fill();
  }
}
