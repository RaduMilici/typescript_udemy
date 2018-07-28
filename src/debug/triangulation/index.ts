import { Triangulation, Vector } from 'pulsar-pathfinding';
import Canvas from '../../classes/Canvas';

export default class Debug_triangulation {

    private readonly triangulation: Triangulation;

    constructor(private points: Vector[], private canvas: Canvas) {
        this.triangulation = new Triangulation(this.points);
        this.start();
    }

    start(): void {
        console.time('triangulation');
        
        this.triangulation.start();
        this.triangulation.MST.start();
        this.triangulation.hull.start();

        this.canvas.draw.triangles(this.triangulation.triangles);
        this.canvas.draw.points(this.points);
        //this.canvas.draw.lines(this.triangulation.lines);
        //this.canvas.draw.lines(this.triangulation.MST.lines);
        this.canvas.draw.lines(this.triangulation.hull.lines);
        //this.canvas.draw.point(Vector.FindPolyCentroid(this.points), 'red', 'red', 10);

        console.timeEnd('triangulation');
      };
}