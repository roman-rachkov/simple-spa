import makeComponent from "../core/component.js";
import header from "./header.jsx";

export default makeComponent("layout-component", (props) => {
  return `
		<header-component></header-component>
		<slot name="main">
			Empty
		</slot>
	`;
});
