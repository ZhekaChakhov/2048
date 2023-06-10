import React from "react";
import "./index.css";
import { Board } from "./components/Board";
import { GameOver } from "./components/GameOver";
import { useKeyPress } from "./components/useKeyPress";

// рандомное целое число в интервале [min, max)
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// проверка полноты доски
function isFull(arr) {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (!arr[i][j]) return false;
		}
	}

	return true;
}

// проверка на окончание игры
function isGameOver(arr, res) {
	if (!isFull) return false;
	if (res) return true;

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 3; j++) {
			if (arr[i][j] == arr[i][j + 1]) return false;
		}
	}

	for (let j = 0; j < 4; j++) {
		for (let i = 0; i < 3; i++) {
			if (arr[i][j] == arr[i + 1][j]) return false;
		}
	}

	return true;
}

function App() {
	// события нажатия на кнопки стрелок
	const isArrowLeftPressed = useKeyPress("ArrowLeft");
	const isArrowRightPressed = useKeyPress("ArrowRight");
	const isArrowUpPressed = useKeyPress("ArrowUp");
	const isArrowDownPressed = useKeyPress("ArrowDown");

	// доска
	const [cells] = React.useState([
		["", "", "", ""],
		["2", "", "", ""],
		["", "", "", "2"],
		["", "", "", ""],
	]);

	const [win, setWin] = React.useState(false);

	// функции-обработчики нажатия для каждой стрелки

	const pressArrowLeft = () => {
		for (let i = 0; i < 4; i++) {
			// цикл для передвижений строки
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

			// цикл для суммирования клеток строки
			for (let j = 3; j >= 0; j--) {
				if (cells[i][j] && cells[i][j - 1] && cells[i][j] == cells[i][j - 1]) {
					cells[i][j - 1] = +cells[i][j - 1] + +cells[i][j];
					cells[i][j] = "";
					j--;
				}
			}

			// еще раз передвигаем клетки
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

				if (+cells[i][j] == 2048) setWin(true);
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		getRandom(0, 4) == 0 ? (cells[i][j] = 4) : (cells[i][j] = 2);
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

			for (let j = 0; j < 4; j++) {
				if (cells[i][j] && cells[i][j + 1] && cells[i][j] == cells[i][j + 1]) {
					cells[i][j + 1] = +cells[i][j + 1] + +cells[i][j];
					cells[i][j] = "";
					j++;
				}
			}

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

				if (+cells[i][j] == 2048) setWin(true);
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		getRandom(0, 4) == 0 ? (cells[i][j] = 4) : (cells[i][j] = 2);
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

			for (let i = 3; i > 0; i--) {
				if (cells[i][j] && cells[i - 1][j] && cells[i][j] == cells[i - 1][j]) {
					cells[i - 1][j] = +cells[i - 1][j] + +cells[i][j];
					cells[i][j] = "";
					i--;
				}
			}

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

				if (+cells[i][j] == 2048) setWin(true);
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		getRandom(0, 4) == 0 ? (cells[i][j] = 4) : (cells[i][j] = 2);
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

			for (let i = 0; i < 3; i++) {
				if (cells[i][j] && cells[i + 1][j] && cells[i][j] == cells[i + 1][j]) {
					cells[i + 1][j] = +cells[i + 1][j] + +cells[i][j];
					cells[i][j] = "";
					i++;
				}
			}

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

				if (+cells[i][j] == 2048) setWin(true);
			}
		}

		let i, j;

		while (true) {
			i = getRandom(0, 4);
			j = getRandom(0, 4);
			if (!cells[i][j]) break;
			if (isFull(cells)) return;
		}

		getRandom(0, 4) == 0 ? (cells[i][j] = 4) : (cells[i][j] = 2);
	};

	isArrowLeftPressed && pressArrowLeft();
	isArrowRightPressed && pressArrowRight();
	isArrowUpPressed && pressArrowUp();
	isArrowDownPressed && pressArrowDown();

	return (
		<div className="App">
			<div className="heading">
				<h1>2048</h1>
				<button
					onClick={() => window.location.reload()}
					className="new-game-btn"
				>
					New Game
				</button>
			</div>
			{isGameOver(cells, win) ? (
				<GameOver win={win} />
			) : (
				<Board cells={cells} />
			)}
		</div>
	);
}

export default App;
