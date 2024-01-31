import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [range, setRange] = useState(1);
  const [input, setInput] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + input);

  function reset() {
    setRange(1);
    setInput(0);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        {range}
      </div>
      <div>
        <button onClick={() => setInput((i) => i - range)}>-</button>
        <input
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => setInput((i) => i + range)}>+</button>
      </div>
      <span>
        {input === 0
          ? "Today is "
          : input < 0
          ? input + " days ago was"
          : input + " days from now is "}
      </span>
      <span>{date.toDateString()}</span>
      {(input !== 0 || range !== 1) && (
        <div>
          <button onClick={reset}>RESET</button>
        </div>
      )}
    </div>
  );
}

export default App;
