import { container } from "../../composition";
import { StartPointSelector } from "./implementation";
import { IStartSelector } from "./types";

container.registerSingleton<IStartSelector, StartPointSelector>();
