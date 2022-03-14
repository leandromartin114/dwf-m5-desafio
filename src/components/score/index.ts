export function initScore() {
	class Score extends HTMLElement {
		constructor() {
			super();
		}
		connectedCallback() {
			this.render();
		}
		shadow = this.attachShadow({ mode: "open" });
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			div.classList.add("root");
			div.innerHTML = `
                <h4 class="title">Score</h4>
                <h4 class="scores">Vos: 2</h4>
                <h4 class="scores">Maquina: 1</h4>
            `;
			style.innerHTML = `
                .root{
                    box-sizing: border-box;
                    border: 10px solid black;
                    border-radius: 8px;
                    width: 270px;
                    height: 230px;
                    background-color: white;
                    color: black;
                    padding: 15px 20px;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    font-family: 'Odibee Sans', cursive;
                }
                .title{
                    margin: 0 0 15px 0;
                    font-size: 50px;
                    text-align: center;
                    font-weight: 700;
                }
                .scores{
                    margin: 0;
                    font-size: 40px;
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
