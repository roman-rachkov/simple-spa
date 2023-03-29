export class Router {
  static myInstance;
  init(routes, rootElement) {
    this.routes = routes;
    this.root = document.querySelector(rootElement);
    this.dispatch();
  }

  static getInstance() {
    if (!this.myInstance) {
      this.myInstance = new this();
    }
    return this.myInstance;
  }

  dispatch() {
    for (let route of this.routes) {
      if (route.isActiveRoute()) {
        this.root.innerHTML = route.run();

        return;
      }
    }
    throw new Error("Path not found");
  }
}
