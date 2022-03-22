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
	initState() {
		if (localStorage.getItem("saved-game")) {
			const savedState = JSON.parse(localStorage.getItem("saved-game"));
			this.setState(savedState);
		} else {
			const initialState = {
				currentGame: {
					userGame: "",
					pcGame: "",
				},
				history: [],
			};
			this.setState(initialState);
		}
	},
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		for (const cb of this.listeners) {
			cb(newState);
		}
		localStorage.setItem("saved-game", JSON.stringify(newState));
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
		this.pushToHistory({
			userGame: move,
			pcGame: pcMove,
		});
	},
	pushToHistory(game: Game) {
		const currentState = this.getState();
		currentState.history.push(game);
		this.setState(currentState);
	},
	resetHistory() {
		const currentState = this.getState();
		currentState.history = [];
		this.setState(currentState);
	},
	defineWinner(myMove: Move, computerMove: Move) {
		const tieGame = [
			{ myPlay: "piedra", pcPlay: "piedra", result: "¡It's a Tie!" },
			{ myPlay: "papel", pcPlay: "papel", result: "¡It's a Tie!" },
			{ myPlay: "tijera", pcPlay: "tijera", result: "¡It's a Tie!" },
		];
		const wonGame = [
			{ myPlay: "piedra", pcPlay: "tijera", result: "¡You Won!" },
			{ myPlay: "papel", pcPlay: "piedra", result: "¡You Won!" },
			{ myPlay: "tijera", pcPlay: "papel", result: "¡You Won!" },
		];
		const lostGame = [
			{ myPlay: "piedra", pcPlay: "papel", result: "¡You Lost!" },
			{ myPlay: "papel", pcPlay: "tijera", result: "¡You Lost!" },
			{ myPlay: "tijera", pcPlay: "piedra", result: "¡You Lost!" },
		];

		for (const i of tieGame) {
			if (i.myPlay == myMove && i.pcPlay == computerMove) {
				return i.result;
			}
		}
		for (const a of wonGame) {
			if (a.myPlay == myMove && a.pcPlay == computerMove) {
				return a.result;
			}
		}
		for (const x of lostGame) {
			if (x.myPlay == myMove && x.pcPlay == computerMove) {
				return x.result;
			}
		}
	},
};
export { state };
