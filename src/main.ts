import Updater from './classes/Updater';
import Behaviour from './classes/Behaviour';
import Canvas from './classes/Canvas';
import Grid from './classes/Grid';
import Obstacles from './classes/Obstacles';
import Click from './classes/Click';
import Navigator from './classes/Navigator';
import size from 'interfaces/size';
import NavigatorTile from './classes/NavigatorTile';

const behaviour = new Behaviour();
const updater = new Updater();

updater.add(behaviour);
// updater.start();

const canvas: Canvas = new Canvas(
  '#canvas',
  window.innerWidth,
  window.innerHeight
);
const gridSize: size = { width: 150, height: 100 };
const tileSize: size = { width: 7, height: 7 };
const grid: Grid = new Grid(canvas, gridSize, tileSize);
new Obstacles(grid, 8000);
new Click(canvas.canvas, grid);

const navBegin: NavigatorTile = grid.rows[0][0].navigatorTile;
const navEnd: NavigatorTile =
  grid.rows[gridSize.height - 1][gridSize.width - 1].navigatorTile;
const onNavExplore = (navTile: NavigatorTile) => {
  navTile.tile.fill('blue');
  navTile.tile.stroke();
};
const onNavComplete = (path: NavigatorTile[]): void => {
  path.forEach((navTile: NavigatorTile) => {
    navTile.tile.fill('green');
    navTile.tile.stroke();
  });
};

const navigator = new Navigator(
  grid,
  navBegin,
  navEnd,
  onNavExplore,
  onNavComplete
);

navigator.start();