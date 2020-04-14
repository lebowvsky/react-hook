import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);

  function handleInput (e) {
    setCount(e.target.value);
  }

  return (
    <div>
      <label htmlFor='initvalue'>Valeur initiale du compteur : </label>
      <input
        type='text'
        id='initvalue'
        name='initvalue'
        onChange={handleInput}
      />

      <p>Le compteur est  à : {count} </p>
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
