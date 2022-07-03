import { container } from "./composition";
import { ISystemBuilder } from "./l-system/types";

import { Drawer } from "./graphics/drawer/types";

const drawer = container.get<Drawer>();

drawer.drawLine({
  start: { x: 0, y: 0 },
  end: { x: 100, y: 100 },
});
