/**
 * Key takeaway: setState can take a callback function
 *  to rerender with a new state value based on a transformation
 *  of the previous state
 */

import { useState } from "react";

function App() {
  const [morseString, setMorseString] = useState("");

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
    </div>
  );
}

export default App;
