export function initInstructionspage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
                <my-text class="text" tag="p">Presioná jugar
                y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
                <my-button class="button">Jugar</my-button>
                <div class="moves">
                    <div ><my-play type="piedra"></></div>
                    <div ><my-play type="papel"></></div>
                    <div ><my-play type="tijera"></></div>
                </div>
            `;
	div.classList.add("content");
	style.innerHTML = `
                .content{
                    padding: 30px 15px;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }
                .text{
                    max-width: 385px;
                }
                .button{
                    width: 300px;
                }
                .moves{
                    display: flex;
                    width: 300px;
					justify-content: space-between;
                }

            `;
	div.appendChild(style);
	const button = div.querySelector(".button");
	button.addEventListener("click", () => {
		params.goTo("/game");
	});
	return div;
}
