type Move = "piedra" | "papel" | "tijera";
type Game = {
	userGame: Move;
	pcGame: Move;
};
const state = {
	data: {
		currentGame: {
			userGame: "",
			pcGame: "",
		},
		history: [],
	},
	listeners: [],
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		for (const cb of this.listeners) {
			cb();
		}
		localStorage.setItem("saved-game", newState);
	},
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
	setMove(move: Move) {
		const currentState = this.getState();
		currentState.currentGame.userGame = move;
		const moves = ["piedra", "papel", "tijera"];
		let i = Math.floor(Math.random() * moves.length);
		const pcMove = moves[i];
		currentState.currentGame.pcGame = pcMove;
		this.pushToHistory(currentState.currentGame);
	},
	pushToHistory(game: Game) {
		const currentState = this.getState();
		currentState.history.push(game);
	},
	defineWinner(myMove: Move, computerMove: Move) {
		const drawGame = [
			{ myPlay: "piedra", pcPlay: "piedra", result: "¡Draw Game!" },
			{ myPlay: "papel", pcPlay: "papel", result: "¡Draw Game!" },
			{ myPlay: "tijera", pcPlay: "tijera", result: "¡Draw Game!" },
		];
		const winGame = [
			{ myPlay: "piedra", pcPlay: "tijera", result: "¡You Win!" },
			{ myPlay: "papel", pcPlay: "piedra", result: "¡You Win!" },
			{ myPlay: "tijera", pcPlay: "papel", result: "¡You Win!" },
		];
		const lostGame = [
			{ myPlay: "piedra", pcPlay: "papel", result: "¡You Lost!" },
			{ myPlay: "papel", pcPlay: "tijera", result: "¡You Lost!" },
			{ myPlay: "tijera", pcPlay: "piedra", result: "¡You Lost!" },
		];

		for (const i of drawGame) {
			if (i.myPlay == myMove && i.pcPlay == computerMove) {
				console.log(i.result);
			}
		}
		for (const a of winGame) {
			if (a.myPlay == myMove && a.pcPlay == computerMove) {
				console.log(a.result);
			}
		}
		for (const x of lostGame) {
			if (x.myPlay == myMove && x.pcPlay == computerMove) {
				console.log(x.result);
			}
		}
	},
};
export { state };
