import uniqueId from '../util/uniqueID';
import { NavigatorTile } from 'pulsar-pathfinding';
import { start, obstacle, outline, empty } from '../const/draw';
export default class Tile {
    constructor(size, position, _gridCoords, context) {
        this.size = size;
        this.position = position;
        this._gridCoords = _gridCoords;
        this.context = context;
        this.id = uniqueId();
        this.navigatorTile = null;
        this._isObstacle = false;
        this._isStart = false;
        this.navigatorTile = new NavigatorTile(_gridCoords);
        this.stroke(outline);
    }
    get isObstacle() {
        return this._isObstacle;
    }
    get isStart() {
        return this._isStart;
    }
    get canBeStart() {
        return !this.isObstacle && !this.isStart;
    }
    get gridCoords() {
        return this._gridCoords;
    }
    becomeStart() {
        if (!this.canBeStart) {
            return false;
        }
        this.fill(start);
        this.stroke(outline);
        return true;
    }
    reset() {
        this._isStart = false;
        this.fill(empty);
        this.stroke(outline);
    }
    becomeObstacle() {
        this._isObstacle = true;
        this.fill(obstacle);
    }
    containsPoint({ x, y }) {
        return (x >= this.position.x &&
            x <= this.position.x + this.size.width &&
            y >= this.position.y &&
            y <= this.position.y + this.size.height);
    }
    fill(color) {
        this.draw(() => {
            this.context.fillStyle = color;
            this.context.fill();
        });
    }
    stroke(color = 'black') {
        this.draw(() => {
            this.context.strokeStyle = color;
            this.context.lineWidth = 1;
            this.context.stroke();
        });
    }
    draw(drawAction) {
        const { x, y } = this.position;
        const { width, height } = this.size;
        this.context.beginPath();
        //this.context.arc(x, y , width, 0, 2*Math.PI);
        this.context.rect(x, y, width, height);
        drawAction();
        this.context.closePath();
    }
}
//# sourceMappingURL=Tile.js.map