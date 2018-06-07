import Grid from './Grid';
import Tile from './Tile';

export default class Click {
  constructor(private canvas: HTMLCanvasElement, private grid: Grid) {
    this.addEvent();
  }

  addEvent(): void {
    this.canvas.addEventListener('click', this.onClick.bind(this));
  }

  onClick(point: MouseEvent): void {
    const clickedTile: Tile | null = this.grid.findTileByCoords(point);

    if (clickedTile) {
      this.grid.setStart(clickedTile);
    }
  }
}
