import id from '../interfaces/id';
import uniqueId from '../util/uniqueID';
import Vector from './Vector';

export default class DisjoinedSet implements id {
  id: number = uniqueId();
  readonly points: Vector[];

  constructor(point: Vector) {
    this.points = [point];
  }

  merge(): DisjoinedSet {
    this.points.forEach((point: Vector) => {
      point.set = this;
      this.points.push(point);
    });

    return this;
  }
}
