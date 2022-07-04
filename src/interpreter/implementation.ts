import { AppSettings } from "../settings";
import { IStartSelector } from "../geometry/location";
import { Stack } from "./stack/types";
import { SystemInterpreter } from "./types";
import { IShapeBuilder } from "../geometry/shape";

export class SystemToGeometryMapper implements SystemInterpreter {
  private currentLocation: Point = { x: 0, y: 0 };
  private currentAngle: DegreesAmount = 0;

  private systemTokens: List<Character> = [];
  private drawInstructions: List<Line> = [];

  constructor(
    private shapeBuilder: IShapeBuilder,
    private startSelector: IStartSelector,
    private stack: Stack<TreeJoint>,
    private settings: AppSettings
  ) {}

  public translate(expression: Expression): Line[] {
    this.currentLocation = { ...this.startSelector.selectStart() };
    this.systemTokens = expression.split("");
    this.systemTokens.forEach(this.translateToken);
    return this.drawInstructions;
  }

  private translateToken = (token: Character): void => {
    switch (token) {
      case "0":
      case "1": {
        const line = this.shapeBuilder.createLine(
          this.currentLocation,
          this.settings.stemLength,
          this.currentAngle
        );

        this.drawInstructions.push(line);
        this.currentLocation = { ...line.end };
        break;
      }

      case "[": {
        this.currentAngle -= this.settings.jointAngle;
        this.stack.push({
          location: { ...this.currentLocation },
          rotation: this.currentAngle,
          stemWidth: this.settings.stemLength,
        });

        break;
      }

      case "]": {
        const lastJoint = this.stack.pop();
        this.currentLocation = { ...lastJoint.location };
        this.currentAngle = lastJoint.rotation + 2 * this.settings.jointAngle;
        break;
      }
    }
  };
}
