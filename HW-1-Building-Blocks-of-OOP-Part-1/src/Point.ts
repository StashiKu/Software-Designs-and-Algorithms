export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number);
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    get xValue() {
        return this.x;
    }

    get yValue() {
        return this.y;
    }

    public toString() {
        return `(${this.x}, ${this.y})`;
    }

    private roundNumber(num) {
        return Number((num).toFixed(1));
    }

    private calculate(xX: number, yY: number): number {
        // True when coordinates are on the same line.
        // If false, distance is calculated with Pythagorean theorem
        const isPlainDistance = (this.x === xX && this.y !== yY) || (this.x !== xX && this.y === yY);

        if (isPlainDistance) {
          let distance: number;

          if (this.x === xX && this.y !== yY) {
            distance = this.y - yY;
          } else {
            distance = this.x - xX;
          }

          if (distance < 0) {
            distance *= -1
          }

          return this.roundNumber(distance);
        }

        // Pythagorean theorem calculations
        const exponent = 2;
        const a = xX - this.x;
        const b = yY - this.y;
        let c = Math.sqrt((a ** exponent) + (b ** exponent));

        return this.roundNumber(c);
    }

    public distance(): number;
    public distance(point: Point): number;
    public distance(xX: number, yY: number): number;
    public distance(...arg: any): number | null {
        if (arg.length === 0) {
            return this.calculate(0, 0);
        }

        if (arg.length === 1 && arg[0] instanceof Point) {
            return this.calculate(arg[0].xValue, arg[0].yValue);
        }

        if (arg.length === 1 && typeof arg[0] === 'number') {
            return this.calculate(arg[0], 0);
        }

        if (arg.length === 2 && typeof arg[0] === 'number' && typeof arg[1] === 'number') {
            return this.calculate(arg[0], arg[1]);
        }

        return null;
    }
}