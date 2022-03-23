export function initHomepage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
                <my-text class="text" tag="h1">Rock Paper Scissors</my-text>
                <my-button class="button new">New Game</my-button>
                <my-button class="button score">Score</my-button>
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
                    width: 300px;
                    height: 210px;
                    display: flex;
                    align-items: center;
                }
                .button{
                    width: 300px;
                }
                .moves{
                    display: flex;
                    width: 300px;
					justify-content: space-between;
                }
                @media (min-width: 969px){
                    .text{
                        width: 330px;
                        height: 230px;
                    }
                    .button{
                        width: 350px;
                    }
                    .moves{
                        width: 350px;
                    }
                }
            `;
	div.appendChild(style);
	const newGameEl = div.querySelector(".new");
	newGameEl.addEventListener("click", () => {
		params.goTo("/instructions");
	});
	const scoreEl = div.querySelector(".score");
	scoreEl.addEventListener("click", () => {
		params.goTo("/score");
	});
	return div;
}
