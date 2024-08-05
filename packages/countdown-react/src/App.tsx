import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SevenSegment } from "../lib/main";
import { useControlledCountdown } from "../lib/hooks/use-controlled-countdown";

function App() {
  const [count, setCount] = useState(0);
  const { days, hours, isRunning, minutes, seconds, start, stop } =
    useControlledCountdown(60 * 4);

  console.log("🚀 ~ App ~ isRunning:", isRunning);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      {seconds
        .toString()
        .padStart(2, "0")
        .split("")
        .map((second, index) => {
          return <SevenSegment key={index} digit={parseInt(second)} />;
        })}
    </>
  );
}

export default App;
