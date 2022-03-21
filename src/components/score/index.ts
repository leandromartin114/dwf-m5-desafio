import { state } from "../../state";
export function initScore() {
	class Score extends HTMLElement {
		constructor() {
			super();
		}
		connectedCallback() {
			this.render();
			state.subscribe(() => {
				this.shadow.firstChild?.remove();
				this.render();
			});
		}
		shadow = this.attachShadow({ mode: "open" });
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			const results = state.getState().history;
			let drawsCounter = 0;
			let winsCounter = 0;
			let lostsCounter = 0;
			for (const r of results) {
				if (state.defineWinner(r.userGame, r.pcGame) == "¡It's a Tie!") {
					drawsCounter++;
				}
				if (state.defineWinner(r.userGame, r.pcGame) == "¡You Won!") {
					winsCounter++;
				}
				if (state.defineWinner(r.userGame, r.pcGame) == "¡You Lost!") {
					lostsCounter++;
				}
			}
			div.innerHTML = `
            <h4 class="title">Score</h4>
            <h4 class="scores">Vos: ${winsCounter.toString()}</h4>
            <h4 class="scores">Maquina: ${lostsCounter.toString()}</h4>
            <h4 class="scores">Empates: ${drawsCounter.toString()}</h4>
        `;
			div.classList.add("root");
			style.innerHTML = `
                .root{
                    box-sizing: border-box;
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
                .title{
                    margin: 0 0 15px 0;
                    font-size: 42px;
                    text-align: center;
                    font-weight: 700;
                }
                .scores{
                    margin: 0;
                    font-size: 32px;
                    text-align: right;
                    font-weight: 400;
                }
            `;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-score", Score);
}
