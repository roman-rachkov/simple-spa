export default class Route {
  constructor(name, view, defaultRoute) {
    this.name = name;
    this.view = view;
    this.default = defaultRoute;
  }

  isActiveRoute(hashedPath) {
    return hashedPath.replace("#", "") === this.name;
  }
}
