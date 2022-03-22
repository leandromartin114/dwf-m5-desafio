import { state } from "../../state";
export function initResultpage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	renderPage();
	state.subscribe(() => {
		renderPage();
	});
	function renderPage() {
		let type = "";
		let tieCounter = 0;
		let wonCounter = 0;
		let lostCounter = 0;
		const currentGame = state.getState().currentGame;
		const results = state.getState().history;
		if (
			state.defineWinner(currentGame.userGame, currentGame.pcGame) ==
			"¡It's a Tie!"
		) {
			type = "tie";
		}
		if (
			state.defineWinner(currentGame.userGame, currentGame.pcGame) ==
			"¡You Won!"
		) {
			type = "won";
		}
		if (
			state.defineWinner(currentGame.userGame, currentGame.pcGame) ==
			"¡You Lost!"
		) {
			type = "lost";
		}
		div.classList.add("content");
		div.classList.add(type);

		for (const r of results) {
			if (state.defineWinner(r.userGame, r.pcGame) == "¡It's a Tie!") {
				tieCounter++;
			}
			if (state.defineWinner(r.userGame, r.pcGame) == "¡You Won!") {
				wonCounter++;
			}
			if (state.defineWinner(r.userGame, r.pcGame) == "¡You Lost!") {
				lostCounter++;
			}
		}
		div.innerHTML = `
					<my-result type="${type}"></my-result>
					<div class="special">
						<div class="score">
							<my-text tag="h3">Score</my-text>
							<my-text tag="h4">You: ${wonCounter.toString()}</my-text>
							<my-text tag="h4">Computer: ${lostCounter.toString()}</my-text>
							<my-text tag="h4">Ties: ${tieCounter.toString()}</my-text>
						</div>
						<my-button type="reset" class="reset">Resetear juego</my-button>
					</div>
					<my-button class="button">Volver a jugar</my-button>
				`;
		style.innerHTML = `
					.content{
						padding: 10px;
						height: 100vh;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
					}
					.tie{
						background-color: #eef1c0;
					}
					.won{
						background-color: #b6f0b4;
					}
					.lost{
						background-color: #f0b4b4;
					}
					.score{
						border: 10px solid black;
						border-radius: 8px;
						width: 260px;
						height: 215px;
						background-color: white;
						color: black;
						padding: 10px 15px;
						display: flex;
						justify-content: center;
						flex-direction: column;
						font-family: 'Odibee Sans', cursive;
					}
					.button{
						width: 300px;
					}
					.special{
						width: 260px;
						display: grid;
						gap: 5px
					}
				`;
		listeners();
	}
	function listeners() {
		div.appendChild(style);
		const buttonEl = div.querySelector(".button");
		buttonEl.addEventListener("click", () => {
			params.goTo("/instructions");
		});
		const resetEl = div.querySelector(".reset");
		resetEl.addEventListener("click", () => {
			state.resetHistory();
		});
	}
	return div;
}
