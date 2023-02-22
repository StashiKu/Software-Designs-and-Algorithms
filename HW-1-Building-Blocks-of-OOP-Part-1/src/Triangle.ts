import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
    private p1: Point
    private p2: Point
    private p3: Point
  
    constructor(p1: Point, p2: Point, p3: Point);
    constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean)
    constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
        super([p1,p2,p3], color = 'green', filled = false );

        this.points = [p1,p2,p3];
        this.color = color ?? 'green';
        this.filled = filled ?? true;
    }
  
    public toString(): string {
      const formattedPointsStr = this.points.reduce((accum: string[], curr: Point, index: number) => {
        return [...accum, `v${index + 1}=${this.points[index].toString()}`]
      },[]).join(',')
    
      return `Triangle[${formattedPointsStr}]`;
    }
  
    public getType(): string {
      const v1 = this.points[0].distance(this.points[1]);
      const v2 = this.points[1].distance(this.points[2]);
      const v3 = this.points[2].distance(this.points[0]);
  
      if (v1 === v2 && v2 === v3 && v3 === v1) {
        return 'equilateral triangle';
      }
  
      if ((v1 !== v2 && v2 === v3) || (v1 === v2 && v2 !== v3)) {
        return 'isosceles triangle';
      }
  
      return 'scalene triangle';
    }
  }
  