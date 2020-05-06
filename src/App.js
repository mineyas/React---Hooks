import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleChan = yas => {
    setCount(Number(yas.target.value))
  }

  return (
    <div>
      <p>Le compteur est  à WOOOOOOOOOOOOOOOOOOOOOOOW: {count} </p>
      <input  onChange={handleChan}></input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      
    </div>
  );
}

export default Counter;
