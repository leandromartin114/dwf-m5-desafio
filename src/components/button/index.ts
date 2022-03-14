export function initButton() {
	class myButton extends HTMLElement {
		constructor() {
			super();
		}
		connectedCallback() {
			this.render();
		}
		shadow = this.attachShadow({ mode: "open" });
		text = this.textContent;
		render() {
			const div = document.createElement("div");
			const style = document.createElement("style");
			div.innerHTML = `
			<div class="root">
				<button class="button">${this.text}</button>
			</div>
			`;
			style.innerHTML = `
				.root{
					max-width: 350px;
				}
				.button{
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 40px;
					font-weight: 700;
					background-color: #006CFC;
					border: 6px solid #001997;
					border-radius: 8px;
					width: 100%;
					padding: 15px 0;
					color: white;
					font-family: 'Odibee Sans', cursive;
					font-weight: 400;
				}
			`;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-button", myButton);
}
