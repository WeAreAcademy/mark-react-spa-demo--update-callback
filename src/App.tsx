/**
 * Key takeaway: [state, setState] is a pair provided by setState,
 *  and we can have multiple independent pieces of state.
 *
 * We use the state, setState naming convention to make it clear
 *  where these things belong.
 *
 * TASK: fix the horrible [foo, bar] call
 */

import { useState } from "react";

/**
 * Our App function runs repeatedly - once on every render
 */
function App() {
  // multiple independent pieces of state
  const [name, setName] = useState("Spiderman");
  const [enemyName, setEnemyName] = useState("The Green Goblin");
  // TODO rename
  const [foo, bar] = useState(":)");

  const handleCostumeUp = () => setName("Spiderman");
  const handleCostumeDown = () => setName("Peter Parker");
  const handleEvilSymbiote = () => setName("Venom");

  const handleMarvelEnemy = () => setEnemyName("The Green Goblin");
  const handleDCEnemy = () => setEnemyName("Batman");

  // TODO rename
  const handleSomething = () => {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      bar(":)");
    } else if (randomNumber < 2 / 3) {
      bar(":/");
    } else {
      bar(":(");
    }
  };

  // when do these get run?
  // inspect your browser console as you're updating state.
  console.log("App is rendering with name state value as:", name);
  console.log("App is rendering with enemyName state value as:", enemyName);
  console.log("App is rendering with foo state value as:", foo);

  return (
    <div>
      <h1>Hi, I'm {name}!</h1>
      <p>My arch-nemesis is {enemyName}.</p>
      <hr />
      <button onClick={handleCostumeUp}>Costume up!</button>
      <button onClick={handleCostumeDown}>Costume down!</button>
      <button onClick={handleEvilSymbiote}>Evil symbiote!</button>
      <button onClick={handleMarvelEnemy}>Marvel enemy</button>
      <button onClick={handleDCEnemy}>DC enemy</button>
      <hr />
      <h2>erm, {foo}</h2>
      <button onClick={handleSomething}>
        {/* todo: rename? */}
        Do something
      </button>
    </div>
  );
}

export default App;
