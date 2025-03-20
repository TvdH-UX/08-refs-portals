import { useState, useRef } from "react";

export default function Player() {
  const nameInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(nameInput.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={nameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
