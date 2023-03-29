import makeComponent from "../core/component.js";
import layout from "../components/layout.jsx";
export default makeComponent("index-page", () => {
  return `
		<layout-component>
		<main slot="main" class="container">
			<h1>Main</h1>
		</main>
		</layout-component>
	`;
});
