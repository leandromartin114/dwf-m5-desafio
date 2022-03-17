export function initGamepage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = ` 
        <div class="counter-container"></div>
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
            .moves{
                display: flex;
                width: 300px;
                justify-content: space-between;
            }
            `;
	const counterContainer = div.querySelector(".counter-container");
	let counter = 4;
	const interval = setInterval(() => {
		counter--;
		counterContainer.innerHTML = `<count-down>${counter.toString()}</count-down>`;
		if (counter == 0) {
			clearInterval(interval);
		}
	}, 1000);
	div.appendChild(style);
	return div;
}
