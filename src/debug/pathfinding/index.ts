import size from '../../interfaces/size';
import { Grid, NavigatorTile, Vector, Navigator } from 'pulsar-pathfinding';
import Canvas from '../../classes/Canvas';

export default class Debug_pathfinding {
    private readonly gridSize: size = { width: 30, height: 70 };
    private readonly tileSide: number = 10;
    private readonly obstacleCount: number = 150;
    private readonly tileSize: size;
    private readonly grid: Grid;
    private readonly navigatorsCount: number = 1;
    
    constructor(private readonly canvas: Canvas) {
        this.tileSize = { width: this.tileSide, height: this.tileSide };
        this.grid = new Grid(this.gridSize);
        this.canvas.drawGrid(this.gridSize, this.tileSize);
        this.makeNavigators(this.navigatorsCount);
    }

    private onNavExplore({ position }: NavigatorTile) {
        const tile = this.canvas.getTile(position);
        tile.fill('blue');
        tile.stroke();
    };

    private onNavComplete(path: NavigatorTile[]): void {
        if (path === null) {
          console.error('no valid path');
          return;
        }
        path.forEach(({ position }: NavigatorTile) => {
          const tile = this.canvas.getTile(position);
          tile.fill('green');
          tile.stroke();
        });  
    };

    makeNavigators(count: number): void{
        for (let i = 0; i < count; i++) {
            //const navBegin: NavigatorTile = grid.randomFreeTile();
            //const navEnd: NavigatorTile = grid.randomFreeTile();
            const navBegin: NavigatorTile = this.grid.findTile(new Vector({ x: 0, y: 0 }));
            const navEnd: NavigatorTile = this.grid.findTile(
            new Vector({ x: this.gridSize.width - 1, y: this.gridSize.height - 1 })
            );
            const navigator: Navigator = new Navigator(
            this.grid,
            navBegin,
            navEnd,
            undefined,
            this.onNavComplete.bind(this)
            );
            navigator.start();
        }
    };
}