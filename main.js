import "./style.css";
import Route from "./js/route.js";
import { Router } from "./js/router.js";

const routes = [];

routes.push(new Route("main", "index.html", true));
routes.push(new Route("about", "about.html"));

const router = new Router(routes, "#app");
