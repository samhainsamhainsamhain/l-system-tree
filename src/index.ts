import { Application } from "./app/types";
import { container } from "./composition";

const app = container.get<Application>();
app.start();
