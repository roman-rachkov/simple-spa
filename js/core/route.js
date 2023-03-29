export default class Route {
  constructor(path, component) {
    this.path = path;
    this.component = component;
  }

  isActiveRoute() {
    return window.location.pathname === this.path;
  }

  run() {
    return `${this.component}`;
  }
}
