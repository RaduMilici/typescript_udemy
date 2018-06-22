// import './triangulation_classes/Triangle';
import Canvas from './classes/Canvas';
import Vector from './triangulation_classes/Vector';
import Triangulation from './triangulation_classes/Triangulation';
import { points as r_points } from './util/random';
import size from 'interfaces/size';
import boundingBox from './interfaces/bounding_box';
// import { Grid, Navigator, NavigatorTile } from 'pulsar-pathfinding';

const canvasSize: size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const canvas: Canvas = new Canvas('#canvas', canvasSize);
const padding = 50;
const box1: boundingBox = {
  top: padding,
  bottom: (canvasSize.height - padding) / 2,
  left: padding,
  right: (canvasSize.width - padding) / 2,
};

const box2: boundingBox = {
  top: padding,
  bottom: (canvasSize.height - padding) / 2,
  left: (padding + canvasSize.width) / 2,
  right: canvasSize.width - padding,
};

const box3: boundingBox = {
  top: (padding + canvasSize.height) / 2,
  bottom: (canvasSize.height - padding),
  left: (padding + canvasSize.width) / 2,
  right: canvasSize.width - padding,
};

const box4: boundingBox = {
  top: (padding + canvasSize.height) / 2,
  bottom: (canvasSize.height - padding),
  left: padding,
  right: (canvasSize.width - padding) / 2,
};

const randomTriangulation = (box: boundingBox): void => {
  const points: Vector[] = r_points(1000, box);
  const triangulation = new Triangulation(points);
  triangulation.start();
  canvas.draw.triangles(triangulation.triangles);
  canvas.draw.points(points);
};

randomTriangulation(box1);
randomTriangulation(box2);
randomTriangulation(box3);
randomTriangulation(box4);
/*
import Canvas from './classes/Canvas';
import { Grid, Navigator, NavigatorTile } from 'pulsar-pathfinding';
import size from 'interfaces/size';

const gridSize: size = { width: 50, height: 50 };
const tileSide = 10;
const tileSize: size = { width: tileSide, height: tileSide };
const grid: Grid = new Grid(gridSize);

const canvasSize: size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const canvas: Canvas = new Canvas('#canvas', canvasSize);
canvas.drawGrid(gridSize, tileSize);

const onNavExplore = ({ position }: NavigatorTile) => {
  const tile = canvas.getTile(position);
  tile.fill('blue');
  tile.stroke();
};
const onNavComplete = (path: NavigatorTile[]): void => {
  console.log(path);
  path.forEach(({ position }: NavigatorTile) => {
    const tile = canvas.getTile(position);
    tile.fill('green');
    tile.stroke();
  });
};

grid.obstacles.addRandom(1200);
grid.obstacles.list.forEach(({ position }: NavigatorTile) => {
  const tile = canvas.getTile(position);
  tile.fill('black');
  tile.stroke();
});

const makeNavigators = (count: number): void => {
  for (let i = 0; i < count; i++) {
    //const navBegin: NavigatorTile = grid.randomFreeTile();
    //const navEnd: NavigatorTile = grid.randomFreeTile();
    const navBegin: NavigatorTile = grid.findTile({x: 0, y: 0});
    const navEnd: NavigatorTile = grid.findTile({x: 49, y: 49});
    const navigator: Navigator = new Navigator(
      grid,
      navBegin,
      navEnd,
      onNavExplore,
      onNavComplete
    );
    navigator.start();
  }
};
*/
