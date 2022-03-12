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
				<button class="button">${this.text}</button>
			`;
			style.innerHTML = `
				.button{
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24px;
					font-weight: 700;
				}
			`;
		}
	}
	customElements.define("my-button", myButton);
}
