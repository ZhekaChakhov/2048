import React from "react";
import "./index.css";
import { Board } from "./components/Board";
import { useKeyPress } from "./components/useKeyPress";
// import { Users } from "./components/Users";

function App() {
  const isArrowLeftPressed = useKeyPress("ArrowLeft");
  const isArrowUpPressed = useKeyPress("ArrowUp");
  const isArrowRightPressed = useKeyPress("ArrowRight");
  const isArrowDownPressed = useKeyPress("ArrowDown");

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
