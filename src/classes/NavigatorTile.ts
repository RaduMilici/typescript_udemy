import id from '../interfaces/id';
import uniqueId from '../util/uniqueID';
import Tile from './Tile';

export default class NavigatorTile implements id {
  id: number = uniqueId();
  gVal: number; // distance from start
  hVal: number; // distance from end
  fVal: number; // gCost + hCost
  parent: NavigatorTile;

  get tile(): Tile {
    return this._tile;
  }

  constructor(private _tile: Tile) {}

  get col(): number {
    return this.tile.gridCoords.x;
  }

  get row(): number {
    return this.tile.gridCoords.y;
  }

  get isObstacle(): boolean {
    return this.tile.isObstacle;
  }
}
