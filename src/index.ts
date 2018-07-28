import Canvas from './classes/Canvas';
import { points as r_points } from './util/random';
import size from './interfaces/size';
import boundingBox from './interfaces/bounding_box';
import { Vector } from 'pulsar-pathfinding';

import Debug_triangulation from './debug/triangulation';
import Debug_pathdinging from './debug/pathfinding';

const canvasSize: size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const canvas: Canvas = new Canvas('#canvas', canvasSize);
const padding = 100;
const box: boundingBox = {
  top: padding,
  bottom: canvasSize.height - padding,
  left: padding,
  right: canvasSize.width - padding,
};

const points: Vector[] = r_points(100, box);

new Debug_triangulation(points, canvas);
new Debug_pathdinging(canvas);

