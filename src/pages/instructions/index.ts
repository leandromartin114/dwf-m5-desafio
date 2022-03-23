export function initInstructionspage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
                <my-text class="text" tag="p">Press "Play" and choose: 
                rock, paper or scissors before the countdown ends.</my-text>
                <my-button class="button">Play</my-button>
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
                    width: 300px;
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
                        width: 350px;
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
	const button = div.querySelector(".button");
	button.addEventListener("click", () => {
		params.goTo("/game");
	});
	return div;
}
