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
        <Cell value={2} />
        <Cell value={4} />
        <Cell value={8} />
        <Cell value={16} />
      </div>
      <div className="board-row">
        <Cell value={32} />
        <Cell value={64} />
        <Cell value={128} />
        <Cell value={256} />
      </div>
      <div className="board-row">
        <Cell value={512} />
        <Cell value={1024} />
        <Cell value={2048} />
        <Cell value={2} />
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
