import React, { useState } from "react";

function Controls() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [totalFlips, setTotalFlips] = useState(0);
  const [path, setPath] = useState("");
  function flip() {
    // 1=truthy/heads 0=falsy/tails
    const rand = Math.floor(Math.random() * 2);

    if (rand) {
      setHeads(heads + 1);
      setPath("./heads.png");
    } else {
      setTails(tails + 1);
      setPath("./tails.jpg");
    }

    setTotalFlips(totalFlips + 1);
  }
  return (
    <div>
      <img src={path}></img>
      <div>
        <button onClick={flip}>Flip Me</button>
        <p>{`Out of ${totalFlips} flips, there have been ${heads} heads and ${tails} tails`}</p>
      </div>
    </div>
  );
}

export default Controls;
