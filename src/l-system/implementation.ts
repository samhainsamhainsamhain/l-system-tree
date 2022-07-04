import { ISystemBuilder, SystemSettings } from "./types";

export class Builder implements ISystemBuilder {
  private state: SystemState = "";
  public build({ initiator, rules, iterations }: SystemSettings): Expression {
    this.state = initiator;

    for (let i = 0; i < iterations; i++) {
      this.applyRules(rules);
    }

    return this.state;
  }

  private applyRules(rules: RuleSet): void {
    const Characters: List<Character> = this.state.split("");
    this.state = "";

    for (const character of Characters) {
      const addition = rules[character] ?? character;
      this.state += addition;
    }
  }
}
