import Grid from './Grid';
import Tile from './Tile';

export default class Obstacles {
  private retries: number = 0;
  private maxRetries: number = 100;

  constructor(private grid: Grid, private count: number) {
    this.populate();
  }

  private populate(): void {
    for (let i = 0; i < this.count; i++) {
      this.makeObstacle();
    }
  }

  private makeObstacle(): void {
    const randomTile: Tile = this.grid.randomTile();

    if (randomTile.isObstacle) {
      this.retryMakeObstacle();
    }

    randomTile.becomeObstacle();
  }

  private retryMakeObstacle(): void {
    if (this.retries++ >= this.maxRetries) {
      return;
    }

    this.makeObstacle();
  }
}
