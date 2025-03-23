import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [currentPlayerName, setCurrentPlayerName] = useState(null);

  const handleClick = () => {
    setCurrentPlayerName(playerName.current.value);
    playerName.current.value = " ";
  };

  return (
    <section id="player">
      <h2>
        Welcome {currentPlayerName ? currentPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
