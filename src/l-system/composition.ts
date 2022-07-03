import { container } from "../composition";
import { ISystemBuilder } from "./types";
import { Builder } from "./implementation";

container.registerSingleton<ISystemBuilder, Builder>();
