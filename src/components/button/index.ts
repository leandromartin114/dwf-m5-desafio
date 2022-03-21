export function initButton() {
	class myButton extends HTMLElement {
		constructor() {
			super();
		}
		shadow = this.attachShadow({ mode: "open" });
		text = this.textContent;
		types = ["normal", "reset"];
		type: string = "normal";
		connectedCallback() {
			if (this.types.includes(this.getAttribute("type"))) {
				this.type = this.getAttribute("type") || this.type;
			}
			this.render();
		}
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			div.innerHTML = `
				<button class="${this.type}">${this.text}</button>
			`;
			style.innerHTML = `
				.root{
					max-width: 350px;
				}
				.normal{
					font-size: 40px;
					background-color: #006CFC;
					border: 6px solid #001997;
					border-radius: 8px;
					width: 100%;
					padding: 15px 5px;
					color: white;
					font-family: 'Odibee Sans', cursive;
					font-weight: 400;
				}
				.reset{
					font-size: 30px;
					background-color: #f54848;
					border: 6px solid #9e0c07;
					border-radius: 8px;
					width: 100%;
					padding: 5px 2px;
					color: white;
					font-family: 'Odibee Sans', cursive;
					font-weight: 500;
					display: flex;
                    justify-content: center;
				}
			`;
			div.classList.add("root");
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-button", myButton);
}
