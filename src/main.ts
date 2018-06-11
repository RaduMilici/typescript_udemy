import Canvas from './classes/Canvas';
import Grid from './classes/Grid';
import Click from './classes/Click';
import Navigator from './classes/Navigator';
import NavigatorTile from './classes/NavigatorTile';
import size from 'interfaces/size';

const canvasSize = { width: window.innerWidth, height: window.innerHeight };
const canvas: Canvas = new Canvas('#canvas', canvasSize);
const gridSize: size = { width: 100, height: 100 };
const tileSize: size = { width: 7, height: 7 };
const grid: Grid = new Grid(gridSize);
const navBegin: NavigatorTile = grid.rows[0][0];
const navEnd: NavigatorTile = grid.rows[gridSize.height - 1][gridSize.width - 1];
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
const navigator = new Navigator(grid, navBegin, navEnd, onNavExplore, onNavComplete);

new Click(canvas.canvas, grid);
canvas.drawGrid(gridSize, tileSize);
navigator.start();