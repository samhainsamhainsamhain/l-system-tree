import { container } from "../composition";

import { SystemBuilder } from "./types";

import { Builder } from "./implementation";

container.registerSingleton<SystemBuilder, Builder>();
