import classes from "./style.module.css";
import makeComponent from "../../core/component.js";
import header from "../../components/header.jsx";

export default makeComponent("about-page", () => {
  const names = ["Yuliya", "Oleg", "Andrew", "John", "Mustafa"];

  console.log(classes);
  return `
		${header}
		<main class="container">
		<h1 class="${classes.header}">about</h1>
		<ul>
			${names.map((name) => "<li>" + name + "</li>").join("")}
		</ul>
		</main>
	`;
});