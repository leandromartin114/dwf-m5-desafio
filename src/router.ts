import { initHomepage } from "./pages/home";
import { initInstructionspage } from "./pages/instructions";
import { initGamepage } from "./pages/game";
import { initResultpage } from "./pages/result";
import { initScorepage } from "./pages/score";

const BASE_PATH = "/dwf-m5-desafio";

function isGithubPages() {
	return location.host.includes("github.io");
}
export function initRouter(container: Element) {
	const routes = [
		{ path: /\/home/, component: initHomepage },
		{ path: /\/instructions/, component: initInstructionspage },
		{ path: /\/game/, component: initGamepage },
		{ path: /\/result/, component: initResultpage },
		{ path: /\/score/, component: initScorepage },
	];
	function goTo(path) {
		const completePath = isGithubPages() ? BASE_PATH + path : path;
		history.pushState({}, "", completePath);
		handleRoute(completePath);
	}
	function handleRoute(route) {
		const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
		for (const r of routes) {
			if (r.path.test(newRoute)) {
				const element = r.component({ goTo: goTo });
				container.firstChild?.remove();
				container.appendChild(element);
			}
		}
	}
	if (location.pathname == "/" || location.pathname == "/dwf-m5-desafio/") {
		goTo("/home");
	} else {
		handleRoute(location.pathname);
	}
	window.onpopstate = () => {
		handleRoute(location.pathname);
	};
}
