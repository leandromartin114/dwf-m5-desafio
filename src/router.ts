import { initHomepage } from "./pages/home";
import { initInstructionspage } from "./pages/instructions";
import { initGamepage } from "./pages/game";
import { initResultpage } from "./pages/result";
export function initRouter(container: Element) {
	const routes = [
		{ path: /\/home/, component: initHomepage },
		{ path: /\/instructions/, component: initInstructionspage },
		{ path: /\/game/, component: initGamepage },
		{ path: /\/result/, component: initResultpage },
	];
	function goTo(path) {
		history.pushState({}, "", path);
		handleRoute(path);
	}
	function handleRoute(route) {
		for (const r of routes) {
			if (r.path.test(route)) {
				const element = r.component({ goTo: goTo });
				container.firstChild?.remove();
				container.appendChild(element);
			}
		}
	}
	if (location.pathname == "/") {
		handleRoute("/home");
	} else {
		handleRoute(location.pathname);
	}
}
