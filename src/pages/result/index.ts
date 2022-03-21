import { state } from "../../state";
export function initResultpage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	let type = "";
	const currentGame = state.getState().currentGame;
	if (
		state.defineWinner(currentGame.userGame, currentGame.pcGame) ==
		"¡It's a Tie!"
	) {
		type = "tie";
	}
	if (
		state.defineWinner(currentGame.userGame, currentGame.pcGame) == "¡You Won!"
	) {
		type = "won";
	}
	if (
		state.defineWinner(currentGame.userGame, currentGame.pcGame) == "¡You Lost!"
	) {
		type = "lost";
	}
	div.classList.add("content");
	div.classList.add(type);
	div.innerHTML = `
                <my-result type="${type}"></my-result>
                <div class="special">
                    <my-score class="score"></my-score>
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
                .button{
                    width: 300px;
                }
                .special{
                    width: 260px;
                    display: grid;
                    gap: 5px
                }
            `;
	div.appendChild(style);
	const buttonEl = div.querySelector(".button");
	buttonEl.addEventListener("click", () => {
		params.goTo("/instructions");
	});
	const resetEl = div.querySelector(".reset");
	resetEl.addEventListener("click", () => {
		state.resetHistory();
	});
	return div;
}
