import './triangulation_classes/Triangle';
import './triangulation_classes/Triangulation';
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
