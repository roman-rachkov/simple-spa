import { Router } from "./core/router.js";
import routes from "./routes.js";

Router.getInstance().init(routes, "#app");
