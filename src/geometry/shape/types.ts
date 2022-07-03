export interface IShapeBuilder {
  createLine(start: Point, length: Length, angle?: Angle): Line;
}
