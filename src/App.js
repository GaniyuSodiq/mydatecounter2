import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count < 0
          ? count + " days ago was"
          : count + " days from now is "}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
