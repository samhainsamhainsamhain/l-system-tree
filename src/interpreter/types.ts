export interface SystemInterpreter {
  translate(expression: Expression): List<Line>;
}
