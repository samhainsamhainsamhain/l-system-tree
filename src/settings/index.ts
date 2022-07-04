import { container } from "../composition";

export type AppSettings = {
  canvasSize: Size;

  iterations: IterationsCount;
  initiator: Axiom;
  rules: RuleSet;

  stemLength: Length;
  jointAngle: Angle;

  leafWidth: PixelsAmount;
  stemWidth: PixelsAmount;
};

export const settings: AppSettings = {
  canvasSize: {
    width: 1000,
    height: 800,
  },

  iterations: 14,
  initiator: "22220",
  rules: {
    "1": "21",
    "0": "1[20]20",
  },

  stemLength: 13,
  jointAngle: 18,

  leafWidth: 4,
  stemWidth: 16,
};

container.registerSingleton<AppSettings>(() => settings);
