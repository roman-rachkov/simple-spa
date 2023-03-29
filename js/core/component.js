import { Router } from "./router.js";

const makeComponent = (name, callback, classes = null) => {
  console.log(classes);
  return (function (...args) {
    if (!customElements.get(name)) {
      customElements.define(
        name,
        class extends HTMLElement {
          constructor() {
            super();
            this.attachShadow({ mode: "open" });
          }
          connectedCallback() {
            const navLinkHandle = (e) => {
              e.preventDefault();
              window.history.pushState({}, "", e.target.href);
              Router.getInstance().dispatch();
            };

            this.shadowRoot.innerHTML = callback([
              args,
              this.attributes,
              this.slot,
              this.assignedSlot,
            ]);

            // this.shadowRoot.adoptedStyleSheets = classes;

            this.shadowRoot.querySelectorAll("[spa-link]").forEach((link) => {
              if (!link.getAttribute("spa-link")) {
                link.addEventListener("click", navLinkHandle);
                link.setAttribute("spa-link", true);
              }
            });
          }
        }
      );
    }

    return name;
  })();
};

export default makeComponent;
