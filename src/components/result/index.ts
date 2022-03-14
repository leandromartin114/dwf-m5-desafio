export function initResult() {
	class Result extends HTMLElement {
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
			div.textContent = "¡Ganaste!";
			div.classList.add("root");
			style.innerHTML = `
                .root{
                    box-sizing: border-box;
                    border: 10px solid black;
                    border-radius: 100%;
                    width: 260px;
                    height: 260px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
					font-family: 'Odibee Sans', cursive;
                    font-size: 50px;
                    font-weight: 400;
                    background-color: #6CB46C;
                    color: black;
                }
            `;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-result", Result);
}
