export default class Canvas {
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;

  private readonly width: number;
  private readonly height: number;

  constructor(selector: string, width: number, height: number) {
    this.width = width;
    this.height = height;

    this.canvas = document.querySelector(selector) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.setSize(this.width, this.height);
  }

  setSize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}
