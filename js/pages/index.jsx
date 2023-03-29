import makeComponent from "../core/component.js";
import header from "../components/header";
export default makeComponent("index-page", () => {
  return `
		${header}
		<main class="container">
			<h1>Main</h1>
		</main>
	`;
});
