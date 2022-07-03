import { container } from "../composition";

export type AppSettings = {
  canvasSize: Size;
};

export const settings: AppSettings = {
  canvasSize: {
    width: 800,
    height: 600,
  },
};

container.registerSingleton<AppSettings>(() => settings);
