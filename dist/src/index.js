// import './triangulation_classes/Triangle';
import Canvas from './classes/Canvas';
// import Vector from './triangulation_classes/Vector';
// import Triangulation from './triangulation_classes/Triangulation';
import { points as r_points } from './util/random';
import { Triangulation } from 'pulsar-pathfinding';
const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const canvas = new Canvas('#canvas', canvasSize);
const padding = 100;
const box = {
    top: padding,
    bottom: (canvasSize.height - padding),
    left: padding,
    right: (canvasSize.width - padding),
};
const points = r_points(1505, box);
const randomTriangulation = () => {
    const triangulation = new Triangulation(points);
    triangulation.start();
    canvas.draw.triangles(triangulation.triangles);
    canvas.draw.points(points);
};
randomTriangulation();
/*
const gridSize: size = { width: 50, height: 50 };
const tileSide = 10;
const tileSize: size = { width: tileSide, height: tileSide };
const grid: Grid = new Grid(gridSize);

canvas.drawGrid(gridSize, tileSize);

const onNavExplore = ({ position }: NavigatorTile) => {
  const tile = canvas.getTile(position);
  tile.fill('blue');
  tile.stroke();
};
const onNavComplete = (path: NavigatorTile[]): void => {
  path.forEach(({ position }: NavigatorTile) => {
    const tile = canvas.getTile(position);
    tile.fill('green');
    tile.stroke();
  });
};

grid.obstacles.addRandom(100);
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

makeNavigators(1);
*/
//# sourceMappingURL=index.js.map