import { initButton } from "./components/button";
import { initCountDown } from "./components/count-down";
import { initPlay } from "./components/play";
import { initResult } from "./components/result";
import { initText } from "./components/text";
import { initRouter } from "./router";
import { state } from "./state";

function main() {
	state.initState();
	initText();
	initButton();
	initCountDown();
	initPlay();
	initResult();
	const containerEl = document.querySelector(".root");
	initRouter(containerEl);
}

main();
