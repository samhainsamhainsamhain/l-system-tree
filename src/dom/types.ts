export interface ElementSource {
  getElement(id: string): HTMLElement | null;
}

export interface PixelRatioSource {
  devicePixelRatio?: number;
}
