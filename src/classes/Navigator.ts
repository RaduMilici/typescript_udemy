import NavigatorTile from './NavigatorTile';
import row from '../interfaces/row';
import Grid from './Grid';
import Tile from './Tile';
import { contains } from '../util/id';
import point from '../interfaces/point';
type onExplore = (tile: NavigatorTile) => void;
type onComplete = (path: NavigatorTile[]) => void;

export default class Navigator {
  private verticalCost: number = 1;
  private diagonalCost: number = 1.4;
  private neighborsCount: number = 9;
  private tiles: NavigatorTile[] = [];
  private _path: NavigatorTile[] = [];
  private open: NavigatorTile[] = [];
  private closed: NavigatorTile[] = [];
  private current: NavigatorTile;

  constructor(
    private grid: Grid,
    private begin: NavigatorTile,
    private end: NavigatorTile,
    private readonly onExplore?: onExplore,
    private readonly onComplete?: onComplete
  ) {
    if (!onExplore) {
      this.onExplore = () => {};
    }

    if (!onComplete) {
      this.onComplete = this.defaultOnComplete;
    }
  }

  get path(): NavigatorTile[] {
    return this._path;
  }

  start(): void {
    this.addOpenTiles(this.grid);
    this.calculateH();
    this.closed.push(this.begin);
    this.begin.gVal = 0;
    this.calculateG(this.begin);
  }

  private addOpenTiles(grid: Grid): void {
    grid.rows.forEach((row: row) => {
      const navigatorTiles: NavigatorTile[] = row.map(
        (tile: Tile) => tile.navigatorTile
      );
      this.tiles = this.tiles.concat(navigatorTiles);
    });
  }

  private calculateH(): void {
    this.tiles.forEach((tile: NavigatorTile) => {
      // manhattan distance
      const colVal: number = Math.abs(tile.col - this.end.col);
      const rowVal: number = Math.abs(tile.row - this.end.row);
      tile.hVal = colVal + rowVal;
    });
  }

  private calculateG(tile: NavigatorTile): void {
    this.current = tile;

    for (let i = 0; i < this.neighborsCount; i++) {
      const x: number = tile.row + this.getRowOffset(i);
      const y: number = tile.col + this.getColOffset(i);
      const coords: point = { x, y };
      const attemptedTile: Tile | null = this.grid.findTileByCoords(coords);

      if (!attemptedTile) {
        continue;
      }

      const exploring = attemptedTile.navigatorTile;

      if (exploring.isObstacle) {
        continue;
      }

      if (contains(this.closed, exploring)) {
        continue;
      }

      if (tile.id === exploring.id) {
        this.closed.push(exploring);
      } else {
        if (!this.determineParent(tile, exploring)) {
          continue;
        }

        if (!contains(this.open, exploring)) {
          this.open.push(exploring);
        }

        if (this.isDiagonal(tile, exploring)) {
          exploring.gVal = tile.gVal + this.diagonalCost;
        } else {
          exploring.gVal = tile.gVal + this.verticalCost;
        }
      }

      exploring.fVal = this.calculateF(exploring);
    }

    const next = this.chooseNext();

    if (next) {
      setTimeout(() => {
        this.onExplore(next);
        this.calculateG(next);
      }, 10);
      /*
      this.onExplore(next);
      this.calculateG(next);
      */
    } else {
      const path: NavigatorTile[] = this.getPath();
      this.onComplete(path);
    }
  }

  private calculateF(tile: NavigatorTile): number {
    return tile.gVal + tile.hVal;
  }

  private getRowOffset(iteration: number): number {
    /*
       iteration = 0, 1, or 2: [-1][-1][-1]
       iteration = 3, 4, or 5: [ 0][ 0][ 0]
       iteration = 6, 7, or 8: [+1][+1][+1]
     */
    return this.neighborsCount + -Math.floor((32 - iteration) / 3);
  }

  private getColOffset(iteration: number): number {
    /*
       iteration = 0, 1, or 2: [-1][ 0][+1]
       iteration = 3, 4, or 5: [-1][ 0][+1]
       iteration = 6, 7, or 8: [-1][ 0][+1]
     */
    return iteration % 3 - 1;
  }

  private isDiagonal(tile: NavigatorTile, checkTile: NavigatorTile): boolean {
    return tile.col !== checkTile.col && tile.row !== checkTile.row;
  }

  private determineParent(
    tile: NavigatorTile,
    checkTile: NavigatorTile
  ): boolean {
    if (!checkTile.parent) {
      checkTile.parent = tile;
      return true;
    }

    const moveCost = this.isDiagonal(tile, checkTile)
      ? this.diagonalCost
      : this.verticalCost;

    if (tile.gVal + moveCost < checkTile.gVal) {
      checkTile.parent = tile;
      return true;
    }

    return false;
  }

  private chooseNext(): NavigatorTile | null {
    this.open = this.open.sort(
      (a: NavigatorTile, b: NavigatorTile) => a.fVal - b.fVal
    );
    const next: NavigatorTile | undefined = this.open[0];

    if (!next) {
      return null;
    }

    this.open.shift();
    this.closed.push(next);

    if (next.id === this.end.id) {
      this.current = this.end;
      return null;
    }

    return next;
  }

  private getPath(): NavigatorTile[] {
    const path: NavigatorTile[] = [];
    let { current } = this;

    while (current.id !== this.begin.id) {
      path.push(current);

      if (current.parent) {
        current = current.parent;
      } else {
        break;
      }
    }

    path.reverse();
    return path;
  }

  private defaultOnComplete(path: NavigatorTile[]) {
    console.log(path);
  }
}
