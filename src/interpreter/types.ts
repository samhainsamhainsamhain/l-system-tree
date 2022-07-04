export type Instruction = {
  line: Line;
  color?: Color;
  width?: PixelsAmount;
};

export interface SystemInterpreter {
  translate(expression: Expression): List<Instruction>;
}
