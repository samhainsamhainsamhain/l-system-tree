import { container } from "../../composition";
import { ShapeBuilder } from "./implementation";
import { IShapeBuilder } from "./types";

container.registerSingleton<IShapeBuilder, ShapeBuilder>();
