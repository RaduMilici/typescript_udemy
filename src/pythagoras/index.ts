import { Vector, Triangle } from 'pulsar-pathfinding';
import Square from '../classes/square';
import Canvas from '../classes/Canvas';

export default class Pythagoras {

    constructor(private canvas: Canvas) {}

    start(): void {
        const square: Square = this.makeFirstSquare();
        this.canvas.draw.square(square);
        this.canvas.draw.lines(square.linesArray, 'red', 5);
        
        
    }

    makeFirstSquare(): Square {
        const side: number = 100;
        const halfSide: number = side / 2;
        const middleX = this.canvas.size.width / 2;
        const height = this.canvas.size.height;

        const a: Vector = new Vector({ x: middleX - halfSide, y: height - side });
        const b: Vector = new Vector({ x: middleX + halfSide, y: height - side });
        const c: Vector = new Vector({ x: middleX + halfSide, y: height });
        const d: Vector = new Vector({ x: middleX - halfSide, y: height });

        return new Square(a, b, c, d);
    }

}

