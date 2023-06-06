import React from "react";
import "./index.css";
import { Board } from "./components/Board";
// import { Users } from "./components/Users";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
