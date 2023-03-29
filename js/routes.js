import Route from "./core/route";
import index from "./pages/index";
import about from "./pages/about";

const routes = [];

routes.push(new Route("/", index));
routes.push(new Route("/about", about));

export default routes;
