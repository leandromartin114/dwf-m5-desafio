export function initText() {
	class Text extends HTMLElement {
		constructor() {
			super();
			if (this.tags.includes(this.getAttribute("tag"))) {
				this.tag = this.getAttribute("tag") || this.tag;
			}
		}
		connectedCallback() {
			this.render();
		}
		text = this.textContent;
		tags: string[] = ["h1", "p"];
		tag: string = "p";
		shadow = this.attachShadow({ mode: "open" });
		render() {
			const textEl = document.createElement(this.tag);
			textEl.textContent = this.text;
			const style = document.createElement("style");
			style.innerHTML = `
                h1{
					margin: 0;
                    color: #009048;
                    font-size: 80px;
                    font-weight: 700;
                    text-align: center;
                }
                p{
					margin: 0;
                    font-size: 45px;
                    font-weight: 500;
                    text-align: center;
                }
            `;
			this.shadow.appendChild(textEl);
			this.shadow.appendChild(style);
		}
	}
	customElements.define("my-text", Text);
}
