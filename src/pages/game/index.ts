import Swal from "sweetalert2";
import { state } from "../../state";
export function initGamepage(params) {
	const div = document.createElement("div");
	div.classList.add("content");
	const style = document.createElement("style");
	div.innerHTML = ` 
            <div class="counter-container"></div>
            <ul class="moves">
                <my-play class="piedra" type="piedra" tag="medium"></my-play>
                <my-play class="papel" type="papel" tag="medium"></my-play>
                <my-play class="tijera" type="tijera" tag="medium"></my-play>
            </ul>
            `;
	style.innerHTML = `
            .content{
                padding: 0;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }
            .moves{
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 13px;
                width: 334px;
				height: 180px;
                justify-items: center;
                align-items: center;
                margin: 0;
                padding: 0;
            }
			@media (min-width: 969px){
				.moves{
					width: 470px;
					gap: 32px;
				}
			}
            `;
	div.appendChild(style);
	const counterContainer = div.querySelector(".counter-container");
	counterContainer.innerHTML = `<count-down>5</count-down>`;
	let counter = 6;
	const interval = setInterval(() => {
		counter--;
		counterContainer.innerHTML = `<count-down>${counter.toString()}</count-down>`;
		if (counter == 0) {
			clearInterval(interval);
			Swal.fire({
				title: "¡You don't choose your play!",
				text: "Remember you must choose before the 5 seconds",
				icon: "warning",
				confirmButtonColor: "#006CFC",
			});
			params.goTo("/instructions");
		}
	}, 1000);
	const piedraEl: HTMLElement = div.querySelector(".piedra");
	piedraEl.addEventListener("play", (e: any) => {
		clearInterval(interval);
		const myMove = e.detail.value;
		state.setMove(myMove);
		const pcMove = state.getState().currentGame.pcGame;
		setTimeout(() => {
			div.innerHTML = `
			<div class="result">
			<my-play class="${pcMove}" type="${pcMove}" tag="large"></my-play>
			<my-play class="${myMove}" type="${myMove}" tag="large"></my-play>
			</div>
			<style>
			.result{
				display: grid;
				gap: 30px;
				align-items: center;
				justify-items: center;
			}
			.content{
				padding: 30px 15px;
				height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			</style>
			`;
		}, 1500);
		setTimeout(() => {
			params.goTo("/result");
		}, 3000);
	});
	const papelEl: HTMLElement = div.querySelector(".papel");
	papelEl.addEventListener("play", (e: any) => {
		clearInterval(interval);
		const myMove = e.detail.value;
		state.setMove(myMove);
		const pcMove = state.getState().currentGame.pcGame;
		setTimeout(() => {
			div.innerHTML = `
			<div class="result">
			<my-play class="${pcMove}" type="${pcMove}" tag="large"></my-play>
			<my-play class="${myMove}" type="${myMove}" tag="large"></my-play>
			</div>
			<style>
			.result{
				display: grid;
				gap: 30px;
				align-items: center;
				justify-items: center;
			}
			.content{
				padding: 30px 15px;
				height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			</style>
			`;
		}, 1500);
		setTimeout(() => {
			params.goTo("/result");
		}, 3000);
	});
	const tijeraEl: HTMLElement = div.querySelector(".tijera");
	tijeraEl.addEventListener("play", (e: any) => {
		clearInterval(interval);
		const myMove = e.detail.value;
		state.setMove(myMove);
		const pcMove = state.getState().currentGame.pcGame;
		setTimeout(() => {
			div.innerHTML = `
			<div class="result">
			<my-play class="${pcMove}" type="${pcMove}" tag="large"></my-play>
			<my-play class="${myMove}" type="${myMove}" tag="large"></my-play>
			</div>
			<style>
			.result{
				display: grid;
				gap: 30px;
				align-items: center;
				justify-items: center;
			}
			.content{
				padding: 30px 15px;
				height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			</style>
			`;
		}, 1500);
		setTimeout(() => {
			params.goTo("/result");
		}, 3000);
	});
	return div;
}
