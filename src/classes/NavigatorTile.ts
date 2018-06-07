import id from '../interfaces/id';
import uniqueId from '../util/uniqueID';
import Tile from './Tile';

export default class NavigatorTile implements id {
  id: number = uniqueId();
  gVal: number; // distance from start
  hVal: number; // distance from end
  fVal: number; // gCost + hCost

  constructor(private tile: Tile) {}

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
