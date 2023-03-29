import classes from "./style.module.css";
import makeComponent from "../../core/component.js";
import layout from "../../components/layout.jsx";

export default makeComponent("about-page", () => {
  const names = ["Yuliya", "Oleg", "Andrew", "John", "Mustafa"];

  return `
<!--  	<header-component></header-component>-->
		<layout-component>
		<main slot="main" class="container">
		<h1 class="${classes.header}">about</h1>
		<ul>
			${names.map((name) => "<li>" + name + "</li>").join("")}
		</ul>
		</main>
</layout-component>
	`;
});
