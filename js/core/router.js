export class Router {
  constructor(routes, rootElement) {
    this.routes = routes;
    this.root = document.querySelector(rootElement);
    this.dispatch();
  }

  dispatch() {
    const navLinkHandle = (e) => {
      e.preventDefault();
      window.history.pushState({}, "", e.target.href);
      this.dispatch();
    };

    for (let route of this.routes) {
      if (route.isActiveRoute()) {
        this.root.innerHTML = route.run();

        document.querySelectorAll("[spa-link]").forEach((link) => {
          if (!link.getAttribute("spa-link")) {
            link.addEventListener("click", navLinkHandle);
            link.setAttribute("spa-link", true);
          }
        });

        return;
      }
    }
    throw new Error("Path not found");
  }
}
