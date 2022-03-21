export function initHomepage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
                <my-text class="text" tag="h1">Piedra Papel o Tijera</my-text>
                <my-button class="button">Empezar</my-button>
                <div class="moves">
                    <div ><my-play type="piedra" tag="small"></></div>
                    <div ><my-play type="papel" tag="small"></></div>
                    <div ><my-play type="tijera" tag="small"></></div>
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
                    max-width: 400px;
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
		params.goTo("/instructions");
	});
	return div;
}
