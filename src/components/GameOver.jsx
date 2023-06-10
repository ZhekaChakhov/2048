import React from "react";

export const GameOver = ({ win }) => {
	return <div className="game-over">{win ? "You won" : "You lost"}</div>;
};
