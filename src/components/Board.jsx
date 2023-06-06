import React from "react";
import { Cell } from "./Cell";

export const Board = (
  {
    //   props
  }
) => {
  return (
    <div className="Board">
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};
