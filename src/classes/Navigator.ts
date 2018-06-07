import NavigatorTile from './NavigatorTile';
import row from '../interfaces/row';
import Grid from './Grid';
import Tile from './Tile';
import { contains } from '../util/id';
import point from "../interfaces/point";

export default class Navigator {
  private verticalCost: number = 1;
  private diagonalCost: number = 1.4;
  private neighborsCount: number = 9;
  private tiles: NavigatorTile[] = [];
  private open: NavigatorTile[] = [];
  private closed: NavigatorTile[] = [];
  private current: NavigatorTile;

  constructor(
    private grid: Grid,
    private begin: NavigatorTile,
    private end: NavigatorTile
  ) {
    this.addOpenTiles(grid);
    this.calculateH();
    this.closed.push(this.begin);
    this.begin.gVal = 0;
    this.calculateG(this.begin);
  }

  private addOpenTiles(grid: Grid): void {
    grid.rows.forEach((row: row) => {
      const navigatorTiles = row.map((tile: Tile) => tile.navigatorTile);
      this.tiles = this.tiles.concat(navigatorTiles);
    });
  }

  private calculateH(): void {
    this.tiles.forEach((tile: NavigatorTile) => {
      // manhattan distance
      const colVal = Math.abs(tile.col - this.end.col);
      const rowVal = Math.abs(tile.row - this.end.row);
      tile.hVal = colVal + rowVal;
    });
  }

  private calculateG(tile: NavigatorTile): void {
    do {
      this.current = tile;

      for (let i = 0; i <this.neighborsCount; i++) {
        const row: number = tile.row + this.getRowOffset(i);
        const col: number = tile.col + this.getColOffset(i);
        const attemptedTile: Tile | null = this.grid.findTileByCoords({ x: col, y: row });

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
          continue;
        }
        else {

        }


      }


    } while (false);
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
    return (iteration % 3) - 1;
  }

  private tileExists(coords: point): boolean {
    return Boolean(this.grid.findTileByCoords(coords));
  }

  private isDiagonal(tile: NavigatorTile, checkTile: NavigatorTile): boolean {
    return (tile.col !== checkTile.col) && (tile.row !== checkTile.row);
  }
}
