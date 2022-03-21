declare function require(string): string;
const papelURL = require("url:../../../src/images/papel.png");
const piedraURL = require("url:../../../src/images/piedra.png");
const tijeraURL = require("url:../../../src/images/tijera.png");
export function initPlay() {
	class Play extends HTMLElement {
		constructor() {
			super();
		}
		shadow = this.attachShadow({ mode: "open" });
		types = ["piedra", "papel", "tijera"];
		type: string = "papel";
		tags = ["small", "medium", "large"];
		tag: string = "small";
		connectedCallback() {
			if (this.types.includes(this.getAttribute("type"))) {
				this.type = this.getAttribute("type") || this.type;
			}
			if (this.tags.includes(this.getAttribute("tag"))) {
				this.tag = this.getAttribute("tag") || this.tag;
			}
			this.type = this.getAttribute("type");
			this.render();
		}
		addListeners() {
			const imgEl = this.shadow.querySelector(".img");
			imgEl.addEventListener("click", (e: any) => {
				const myEvent = new CustomEvent("play", {
					detail: {
						value: this.type,
					},
				});
				this.dispatchEvent(myEvent);
			});
		}
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
		chooseSize(size) {
			if (size == "small") {
				return "small";
			}
			if (size == "medium") {
				return "medium";
			}
			if (size == "large") {
				return "large";
			}
		}
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			div.innerHTML = `
			<img type="${this.type}" class="img ${this.chooseSize(
				this.tag
			)}" src="${this.choosePlay(this.type)}">
			`;
			style.innerHTML = `
			.small{
				width: 85px;
				height: 85px;
			}
			.medium{
				width: 100px;
				height: 100px;
			}
			.medium:hover{
				border: 8px solid white;
				border-radius: 100%;
				transition: border 0.5s;
				
			}
			.large{
				width: 200px;
				height: 200px;
			}
            `;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
			this.addListeners();
		}
	}
	customElements.define("my-play", Play);
}
