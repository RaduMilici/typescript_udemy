import Canvas from './Canvas';
import Tile from './Tile';
import size from '../interfaces/size';
import point from '../interfaces/point';
import row from '../interfaces/row';
import { int } from '../util/random';

type boundingBox = { top: number; bottom: number; left: number; right: number };

export default class Grid {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private startTile: Tile | null = null;
  private _rows: row[] = [];

  constructor(
    { canvas, context }: Canvas,
    private gridSize: size,
    private tileSize: size
  ) {
    this.canvas = canvas;
    this.context = context;
    this.makeGrid();
  }

  get rows(): row[] {
    return this._rows;
  }

  randomTile(): Tile {
    const { width, height } = this.gridSize;
    const row = int(0, height - 1);
    const col = int(0, width - 1);

    return this._rows[row][col];
  }

  findTileByCoords({ x, y }: point): Tile | null {
    const row: row = this._rows[x];
    if (!row) {
      return null;
    }

    const tile: Tile = row[y];
    if (!tile) {
      return null;
    }

    return tile;
  }

  findTileByPixelCoords(pixelCoords: point): Tile | null {
    for (let r = 0; r < this._rows.length; r++) {
      const row: row = this._rows[r];

      for (let c = 0; c < row.length; c++) {
        const tile: Tile = row[c];
        if (tile.containsPoint(pixelCoords)) {
          return tile;
        }
      }
    }

    return null;
  }

  setStart(tile: Tile): boolean {
    if (tile.canBeStart) {
      if (this.startTile) {
        this.startTile.reset();
      }

      this.startTile = tile;
      this.startTile.becomeStart();

      return true;
    }

    return false;
  }

  private makeGrid(): void {
    for (let h = 0; h < this.gridSize.height; h++) {
      const row: row = [];

      for (let w = 0; w < this.gridSize.width; w++) {
        const tile = this.makeTile({ x: w, y: h });
        row.push(tile);
      }

      this._rows.push(row);
    }
  }

  private makeTile(gridCoords: point): Tile {
    const { x, y } = this.getTilePosition(gridCoords);
    const { width, height } = this.tileSize;
    return new Tile({ width, height }, { x, y }, gridCoords, this.context);
  }

  private getTilePosition(positionInGrid: point): point {
    const center: boundingBox = this.getBoundingBox();
    const offset = {
      x: this.tileSize.width * positionInGrid.x,
      y: this.tileSize.height * positionInGrid.y,
    };
    return { x: center.left + offset.x, y: center.top + offset.y };
  }

  private getBoundingBox(): boundingBox {
    const center: point = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
    const { width, height } = this.getGridSizeInPixels();
    const halfHeight: number = height / 2;
    const halfWidth: number = width / 2;

    return {
      top: center.y - halfHeight,
      bottom: center.y + halfHeight,
      left: center.x - halfWidth,
      right: center.x + halfWidth,
    };
  }

  private getGridSizeInPixels(): size {
    return {
      width: this.gridSize.width * this.tileSize.width,
      height: this.gridSize.height * this.tileSize.height,
    };
  }
}
