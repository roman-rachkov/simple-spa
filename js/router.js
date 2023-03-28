export class Router {
  constructor(routes, rootElement) {
    this.routes = routes;
    this.root = document.querySelector(rootElement);
    this.init();
  }

  init() {
    window.addEventListener("hashchange", (e) => {
      this.hasChanged();
    });
    this.hasChanged();
  }

  hasChanged() {
    try {
      for (const route of this.routes) {
        if (window.location.hash.length === 0 && route.default) {
          this.dispatch(route);
          return;
        } else if (route.isActiveRoute(window.location.hash.substring(1))) {
          this.dispatch(route);
          return;
        }
      }
      throw new Error("Path not found");
    } catch (e) {
      alert(e.message);
    }
  }

  dispatch(route) {
    fetch("views/" + route.view)
      .then((response) => {
        if (response.ok) {
          response.text().then((text) => {
            const scripts = text.match(/<script>([\s\S]*?)<\/script>/gi);
            this.root.innerHTML = text;
            if (scripts) {
              for (let script of scripts) {
                script = script.replace(/<(\/)?script>/gi, "");
                eval(script);
              }
            }
          });
        } else {
          alert("Something wrong");
        }
      })
      .catch((err) => console.log(err));
  }
}
