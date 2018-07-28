import { Vector, Line } from 'pulsar-pathfinding';

type squareLines = { ab: Line, bc: Line, cd: Line, da: Line };

export default class Square {

    constructor(private a: Vector, private b: Vector, private c: Vector, private d: Vector) {}

    get pointsArray(): Vector[] {
        return [this.a, this.b, this.c, this.d];
    }

    get lines(): squareLines {
        const ab = new Line(this.a, this.b);
        const bc = new Line(this.b, this.c);
        const cd = new Line(this.c, this.d);
        const da = new Line(this.d, this.a);

        return { ab, bc, cd, da };
    }

    get linesArray(): Line[] {
        return [this.lines.ab, this.lines.bc, this.lines.cd, this.lines.da];
    }
}