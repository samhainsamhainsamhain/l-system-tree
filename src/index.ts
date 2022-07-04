import { container } from "./composition";
import { Drawer } from "./graphics/drawer/types";
import { SystemInterpreter } from "./interpreter";
import { ISystemBuilder } from "./l-system/types";
import { AppSettings } from "./settings";

const builder = container.get<ISystemBuilder>();
const drawer = container.get<Drawer>();
const interpreter = container.get<SystemInterpreter>();
const settings = container.get<AppSettings>();

const system = builder.build(settings);
const lines = interpreter.translate(system);
lines.forEach((line) => drawer.drawLine(line));
