import makeComponent from "../core/component.js";

export default makeComponent("header-component", () => {
  return `	
		<header>
			<nav>
				<ul class="container">
					<li><a href="/" spa-link>MAIN</a></li>
					<li><a href="/about" spa-link>ABOUT</a></li>
				</ul>
			</nav>
		</header>
`;
});
