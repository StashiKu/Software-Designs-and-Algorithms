import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];
  protected pointsLength: number;
  private minShapePoints: number = 3;
  private notEnoughPointsError = 'Please provide at least 3 points with non-zero coordinates'; 

  constructor(points: Point[])
  constructor(points: Point[], color: string, filled: boolean)
  constructor(points: Point[], color?: string, filled?: boolean) {
    this.pointsLength = points.length;

    if (points.length < this.minShapePoints) {
      throw new Error(this.notEnoughPointsError);
    }

    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  isItPossibleToCreateAShape(): boolean {
    let obj = {} as {[key: string]: number};
    
    // Searches for dubplicates.
    // Creates an objects with duplicated points and counts them.
    // Dubplicated points are considered to be one single point.
    // The aim of this logic to found out the result number of points.
    for (let i = 0; i < this.pointsLength - 1; i++) {
        for (let j = i + 1; j < this.pointsLength; j++) {
            // compares coordinates in string format
            if (this.points[i].toString() === this.points[j].toString()) {
                if (obj[this.points[i].toString()]) {
                    obj[this.points[i].toString()] += 1;
                } else {
                    obj[this.points[i].toString()] = 2;
                }
            }
        }
    }

    const numberOfPointsWithDuplicatedItems = Object.values(obj).reduce((accum: number, curr: number) => accum += curr, 0);
    const numberOfFilteredPoints = this.pointsLength - (numberOfPointsWithDuplicatedItems - Object.keys(obj).length);

    return numberOfFilteredPoints >= this.minShapePoints;
  }

  getPerimeter(): number {
    if (!this.isItPossibleToCreateAShape()) {
      throw new Error(this.notEnoughPointsError);
    }

    // calculate perimeter
    return this.points.reduce((accum: number, point: Point, index: number) => {
        let distance: number = 0;
    
        if (this.pointsLength - 1 === index) {
            distance = point.distance(this.points[0]);
        } else {
            distance = point.distance(this.points[index + 1]);
        }

        accum = accum + distance;

        return accum
    }, 0);
  }

  public toString() {
    const filledStr = this.filled ? 'filled' : 'not filled';
    const pointStr = this.points.map(point => point.toString()).join(', ');

    return `A Shape with color of ${this.color} and ${filledStr}. Points: ${pointStr}.`;
  }
}
