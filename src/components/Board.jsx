import React from "react";
import { Cell } from "./Cell";

export const Board = ({ cells }) => {
	const renderCell = (i, j) => {
		return <Cell value={cells[i][j]} />;
	};

	return (
		<div className="Board">
			<div className="board-row">
				{renderCell(0, 0)}
				{renderCell(0, 1)}
				{renderCell(0, 2)}
				{renderCell(0, 3)}
			</div>
			<div className="board-row">
				{renderCell(1, 0)}
				{renderCell(1, 1)}
				{renderCell(1, 2)}
				{renderCell(1, 3)}
			</div>
			<div className="board-row">
				{renderCell(2, 0)}
				{renderCell(2, 1)}
				{renderCell(2, 2)}
				{renderCell(2, 3)}
			</div>
			<div className="board-row">
				{renderCell(3, 0)}
				{renderCell(3, 1)}
				{renderCell(3, 2)}
				{renderCell(3, 3)}
			</div>
		</div>
	);
};
