import { useMemo, useState } from "react";
import "./App.css";
import { Countdown, SevenSegment } from "7segment-countdown-react";

function App() {
  const [count, setCount] = useState(0);
  const targetDate = useMemo(() => new Date("2024-08-03T00:00:00+09:00"), []);

  return (
    <>
      <div>
        <h1>7 Segment Countdown</h1>
      </div>

      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
            marginBottom: 50,
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

        <Countdown targetDate={targetDate}>
          <Countdown.Days size={50} />

          <Countdown.Hours size={40} />

          <Countdown.Minutes size={40} />
          <Countdown.Seconds size={20} />
        </Countdown>
      </div>
    </>
  );
}

export default App;
