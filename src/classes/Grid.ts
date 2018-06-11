import NavigatorTile from './NavigatorTile';
import size from '../interfaces/size';
import point from '../interfaces/point';
import row from '../interfaces/row';
import { int } from '../util/random';
import Obstacles from './Obstacles';

export default class Grid {
  readonly tiles: NavigatorTile[] = [];
  private _rows: row[] = [];
  public readonly obstacles: Obstacles = new Obstacles(this);

  constructor(private size: size) {
    this.makeGrid();
  }

  get rows(): row[] {
    return this._rows;
  }

  randomTile(): NavigatorTile {
    const { width, height } = this.size;
    const row = int(0, height - 1);
    const col = int(0, width - 1);

    return this._rows[row][col];
  }

  findTile({ x, y }: point): NavigatorTile | null {
    const row: row = this._rows[x];
    if (!row) {
      return null;
    }

    const tile: NavigatorTile = row[y];
    if (!tile) {
      return null;
    }

    return tile;
  }

  private makeGrid(): void {
    for (let y = 0; y < this.size.height; y++) {
      const row: row = [];

      for (let x = 0; x < this.size.width; x++) {
        const tile: NavigatorTile = new NavigatorTile({ x, y });
        this.tiles.push(tile);
        row.push(tile);
      }

      this._rows.push(row);
    }
  }
}
