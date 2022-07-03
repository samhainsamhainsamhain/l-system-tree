import { container } from "./core";

import "../settings";
import "../l-system/composition";
import "../geometry/shape/composition";
import "../geometry/location/composition";
import "../graphics/drawer/composition";
import "../graphics/context/composition";
import "../dom/composition";

container.registerSingleton<Window>(() => window);

export { container };
