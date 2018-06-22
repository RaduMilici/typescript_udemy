import Vector from './Vector';
import Line from './Line';
import Triangle from './Triangle';
import Triangulation from './Triangulation';

export default class MinimumSpanningTree {
  private readonly points: Vector[];
  private readonly lines: Line[];
  private readonly triangles: Triangle[];

  constructor({ points, triangles }: Triangulation) {
    this.points = [...points];
    this.triangles = [...triangles];
    const triangleLines: Line[] = Triangle.LinesFromArray(this.triangles);
    this.lines = Line.UniqueFromArray(triangleLines);
    this.lines.sort((a: Line, b: Line) => a.length - b.length);
    const nonMinSpanLines: Line[] = [...this.lines];

    
  }
}