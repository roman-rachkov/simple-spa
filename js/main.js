import Route from "./route.js";
import { Router } from "./router.js";

const routes = [];

routes.push(new Route("main", "index.html", true));
routes.push(new Route("about", "about.html"));

const router = new Router(routes, "#app");
