import { AppSettings } from "../../settings";
import { ElementSource, PixelRatioSource } from "../../dom/types";
import { DrawingContext, DrawingContextProvider } from "./types";

export class CanvasContextProvider implements DrawingContextProvider {
  private element: HTMLCanvasElement | null = null;
  private context: DrawingContext | null = null;

  constructor(
    private elementSource: ElementSource,
    private pixelRatioSource: PixelRatioSource,
    private settings: AppSettings
  ) {
    const element = this.elementSource.getElementById("canvas");
    if (!element) throw new Error("Failed to find a canvas element");

    this.element = element as HTMLCanvasElement;
    this.context = this.element.getContext("2d");
    this.normalizeScale();
  }

  public getInstance(): DrawingContext {
    return this.context;
  }

  public normalizeScale(): void {
    if (!this.element || !this.context) return;

    const ratio = this.pixelRatioSource.devicePixelRatio || 1;
    const { width, height } = this.settings.canvasSize;

    this.element.width = width * ratio;
    this.element.height = height * ratio;

    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.context.imageSmoothingEnabled = false;
    this.context.scale(ratio, ratio);
  }
}
