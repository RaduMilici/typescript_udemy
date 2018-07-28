export default class Click {
    constructor(canvas, grid) {
        this.canvas = canvas;
        this.grid = grid;
        this.addEvent();
    }
    addEvent() {
        this.canvas.addEventListener('click', this.onClick.bind(this), false);
        this.canvas.addEventListener('contextmenu', this.onClick.bind(this), false);
    }
    onClick(event) {
        event.preventDefault();
        const clickedTile = null; //this.grid.findTileByPixelCoords(event);
        if (clickedTile) {
            switch (event.button) {
                case 0:
                    //this.grid.setStart(clickedTile.navigatorTile);
                    break;
                case 2:
                    //this.grid.setStart(clickedTile.navigatorTile);
                    break;
            }
        }
        return false;
    }
}
//# sourceMappingURL=Click.js.map