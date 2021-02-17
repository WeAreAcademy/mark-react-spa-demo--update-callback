/**
 * Key takeaway: setState can take a callback function
 *  to rerender with a new state value based on a transformation
 *  of the previous state
 *
 * TASK: build a counter
 */

import { useState } from "react";

function App() {
  const [morseString, setMorseString] = useState("");
  const [count, setCount] = useState(1);

  const handleAddDot = () => {
    setMorseString((prevValue) => `${prevValue}.`);
  };

  const handleAddDash = () => {
    setMorseString((prevValue) => `${prevValue}-`);
  };

  return (
    <div>
      <h1>Morse code compiler</h1>
      <p>Message we're building: {morseString}</p>
      <button onClick={handleAddDot}>Dot</button>
      <button onClick={handleAddDash}>Dash</button>
      <hr />
      {/* TODO: make buttons keep a count up */}
      <p>Current count: {count}</p>
      <button>+ 1</button>
      <button>+ 5</button>
    </div>
  );
}

export default App;
