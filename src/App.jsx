import React from "react";
import "./index.css";
import { Board } from "./components/Board";
import { useKeyPress } from "./components/useKeyPress";

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function isFull(arr) {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (!arr[i][j]) return false;
		}
	}

	return true;
}

function App() {
	const isArrowLeftPressed = useKeyPress("ArrowLeft");
	const isArrowRightPressed = useKeyPress("ArrowRight");
	const isArrowUpPressed = useKeyPress("ArrowUp");
	const isArrowDownPressed = useKeyPress("ArrowDown");

	const [cells] = React.useState([
		["", "", "4", ""],
		["2", "", "", ""],
		["", "2", "", ""],
		["", "", "", "4"],
	]);

	const pressArrowLeft = () => {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				cells[i][j] ||
					cells[i][j + 1] ||
					cells[i][j + 2] ||
					((cells[i][j] = cells[i][j + 3]) && (cells[i][j + 3] = ""));

				cells[i][j] ||
					cells[i][j + 1] ||
					((cells[i][j] = cells[i][j + 2]) && (cells[i][j + 2] = ""));

				cells[i][j] ||
					((cells[i][j] = cells[i][j + 1]) && (cells[i][j + 1] = ""));
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		cells[i][j] = 2;
	};

	const pressArrowRight = () => {
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				cells[i][j] ||
					cells[i][j - 1] ||
					cells[i][j - 2] ||
					((cells[i][j] = cells[i][j - 3]) && (cells[i][j - 3] = ""));

				cells[i][j] ||
					cells[i][j - 1] ||
					((cells[i][j] = cells[i][j - 2]) && (cells[i][j - 2] = ""));

				cells[i][j] ||
					((cells[i][j] = cells[i][j - 1]) && (cells[i][j - 1] = ""));
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		cells[i][j] = 2;
	};

	const pressArrowUp = () => {
		for (let j = 0; j < 4; j++) {
			for (let i = 0; i < 4; i++) {
				i + 3 > 3 ||
					cells[i][j] ||
					cells[i + 1][j] ||
					cells[i + 2][j] ||
					((cells[i][j] = cells[i + 3][j]) && (cells[i + 3][j] = ""));

				i + 2 > 3 ||
					cells[i][j] ||
					cells[i + 1][j] ||
					((cells[i][j] = cells[i + 2][j]) && (cells[i + 2][j] = ""));

				i + 1 > 3 ||
					cells[i][j] ||
					((cells[i][j] = cells[i + 1][j]) && (cells[i + 1][j] = ""));
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		cells[i][j] = 2;
	};

	const pressArrowDown = () => {
		for (let j = 3; j >= 0; j--) {
			for (let i = 3; i >= 0; i--) {
				i - 3 < 0 ||
					cells[i][j] ||
					cells[i - 1][j] ||
					cells[i - 2][j] ||
					((cells[i][j] = cells[i - 3][j]) && (cells[i - 3][j] = ""));

				i - 2 < 0 ||
					cells[i][j] ||
					cells[i - 1][j] ||
					((cells[i][j] = cells[i - 2][j]) && (cells[i - 2][j] = ""));

				i - 1 < 0 ||
					cells[i][j] ||
					((cells[i][j] = cells[i - 1][j]) && (cells[i - 1][j] = ""));
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		cells[i][j] = 2;
	};

	isArrowLeftPressed && pressArrowLeft();
	isArrowRightPressed && pressArrowRight();
	isArrowUpPressed && pressArrowUp();
	isArrowDownPressed && pressArrowDown();

	return (
		<div className="App">
			<Board cells={cells} />
		</div>
	);
}

export default App;
