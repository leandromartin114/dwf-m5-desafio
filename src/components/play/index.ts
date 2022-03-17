declare function require(string): string;
const papelURL = require("url:../../../src/images/papel.png");
const piedraURL = require("url:../../../src/images/piedra.png");
const tijeraURL = require("url:../../../src/images/tijera.png");
export function initPlay() {
	class Play extends HTMLElement {
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
		types = ["piedra", "papel", "tijera"];
		type: string = "papel";
		choosePlay(play) {
			if (play == "papel") {
				return papelURL;
			}
			if (play == "piedra") {
				return piedraURL;
			}
			if (play == "tijera") {
				return tijeraURL;
			}
		}
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			div.classList.add("root");
			div.innerHTML = `
				<img class="img" src=${this.choosePlay(this.type)}></img>
			`;
			style.innerHTML = `
                .root{
					box-sizing: border-box;
                }
				.img{
					width: 90px;
					height: 90px
				}
            `;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-play", Play);
}
