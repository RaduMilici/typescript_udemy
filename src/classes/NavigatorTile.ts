import id from '../interfaces/id';
import uniqueId from '../util/uniqueID';
import point from '../interfaces/point';

export default class NavigatorTile implements id {
  id: number = uniqueId();
  gVal: number; // distance from start
  hVal: number; // distance from end
  fVal: number; // gCost + hCost
  parent: NavigatorTile;
  isObstacle: boolean = false;

  constructor(readonly position: point) {}
}
