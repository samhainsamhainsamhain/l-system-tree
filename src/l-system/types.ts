export type SystemSettings = {
  rules: RuleSet;
  initiator: Axiom;
  iterations: IterationsCount;
};

export interface ISystemBuilder {
  build(settings: SystemSettings): Expression;
}
