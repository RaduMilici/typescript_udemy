import Grid from './Grid';
import NavigatorTile from './NavigatorTile';
import { contains, findIndex } from "../util/id";

export default class Obstacles {
  private readonly openList: NavigatorTile[] = [];
  private readonly closedList: NavigatorTile[] = [];

  constructor(private grid: Grid) {
    this.openList = grid.tiles;
  }

  add(tile: NavigatorTile): boolean {
    return this.manipulate(true, tile);
  }

  remove(tile: NavigatorTile): boolean {
    return this.manipulate(false, tile);
  }

  private manipulate(add: boolean, tile: NavigatorTile): boolean {
    const isInvalid: boolean = add ? tile.isObstacle : !tile.isObstacle;

    if (isInvalid) {
      return;
    }

    let list: NavigatorTile[];
    let otherList: NavigatorTile[];

    if (add) {
      list = this.openList;
      otherList = this.closedList;
    } else {
      list = this.closedList;
      otherList = this.openList;
    }
    console.log(this)

    if (contains(list, tile)) {
      tile.isObstacle = add;
      const index = findIndex(list, tile);
      list.splice(index, 1);
      otherList.push(tile);
      return true;
    }

    return false;
  }
}
