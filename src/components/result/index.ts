export function initResult() {
	class Result extends HTMLElement {
		constructor() {
			super();
		}
		connectedCallback() {
			if (this.types.includes(this.getAttribute("type"))) {
				this.type = this.getAttribute("type") || this.type;
			}
			this.render();
		}
		shadow = this.attachShadow({ mode: "open" });
		types = ["tie", "won", "lost"];
		type: string = "tie";
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			if (this.type == "tie") {
				div.classList.add("tie");
				div.textContent = "¡Empate!";
			}
			if (this.type == "won") {
				div.classList.add("won");
				div.textContent = "¡Ganaste!";
			}
			if (this.type == "lost") {
				div.classList.add("lost");
				div.textContent = "¡Perdiste!";
			}
			div.classList.add("root");
			style.innerHTML = `
                .root{
                    border: 10px solid black;
                    border-radius: 100%;
                    width: 230px;
                    height: 230px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
					font-family: 'Odibee Sans', cursive;
                    font-size: 55px;
                    font-weight: 400;
                    color: black;
                }
				.tie{
					background-color: #f3cd21;
				}
				.won{
					background-color: #6CB46C;
				}
				.lost{
					background-color: #e04048;
				}
            `;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-result", Result);
}
