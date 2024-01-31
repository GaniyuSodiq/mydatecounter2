import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);
  const [input, setInput] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + input);

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />{" "}
        {range}
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setInput((i) => i - 1)}>-</button>
        <input
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => setInput((i) => i + 1)}>+</button>

        {/* <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: {count}
        <button onClick={() => setCount((c) => c + step)}>+</button> */}
      </div>
      <span>
        {input === 0
          ? "Today is "
          : input < 0
          ? input + " days ago was"
          : input + " days from now is "}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
