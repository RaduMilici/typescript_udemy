import Updater from './classes/Updater';
import Behaviour from './classes/Behaviour';
import Canvas from './classes/Canvas';
import Grid from './classes/Grid';
import Obstacles from './classes/Obstacles';
import Click from './classes/Click';
import size from 'interfaces/size';

const behaviour = new Behaviour();
const updater = new Updater();

updater.add(behaviour);
// updater.start();

const canvas: Canvas = new Canvas(
  '#canvas',
  window.innerWidth,
  window.innerHeight
);
const gridSize: size = { width: 20, height: 20 };
const tileSize: size = { width: 25, height: 25 };
const grid: Grid = new Grid(canvas, gridSize, tileSize);
new Obstacles(grid, 100);
new Click(canvas.canvas, grid);

setTimeout(() => {
  updater.stop();
}, 1000);
