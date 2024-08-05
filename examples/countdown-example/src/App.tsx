import { useState } from "react";
import "./App.css";
import { Countdown, SevenSegment } from "@7segment/countdown-react";

function App() {
  const [count, setCount] = useState(0);
  const [targetDate, setTargetDate] = useState(
    new Date("2024-08-09T00:00:00+09:00")
  );

  return (
    <>
      <div>
        <h1>7 Segment</h1>
      </div>

      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <button onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
          {count}
          <SevenSegment digit={count} />
          <button onClick={() => setCount((count) => count - 1)}>
            Decrease
          </button>
        </div>
      </div>

      <div>
        <h1>7 Segment Countdown</h1>
      </div>
      <div style={{ marginBottom: 20 }}>
        <input
          type="datetime-local"
          value={targetDate.toISOString().slice(0, 16)}
          onChange={(e) => setTargetDate(new Date(e.target.value))}
        />
      </div>
      <Countdown targetDate={targetDate} size={20} />
    </>
  );
}

export default App;
