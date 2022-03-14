import { initButton } from "./components/button";
import { initCountDown } from "./components/count-down";
import { initPlay } from "./components/play";
import { initResult } from "./components/result";
import { initScore } from "./components/score";
import { initText } from "./components/text";

function main() {
	initText();
	initButton();
	initCountDown();
	initPlay();
	initResult();
	initScore();
}
main();
