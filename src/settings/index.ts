import { container } from "../composition";

export type AppSettings = {
  canvasSize: Size;

  iterations: IterationsCount;
  initiator: Axiom;
  rules: RuleSet;

  stemLength: Length;
  jointAngle: Angle;
};

export const settings: AppSettings = {
  canvasSize: {
    width: 800,
    height: 600,
  },

  iterations: 5,
  initiator: "0",
  rules: {
    "1": "11",
    "0": "1[0]0",
  },

  stemLength: 10,
  jointAngle: 45,
};

container.registerSingleton<AppSettings>(() => settings);
