export type DrawingContext = CanvasRenderingContext2D | null;

export interface DrawingContextProvider {
  getInstance(): DrawingContext;
}
