import React, { useState } from 'react';
import './App.css';

const App = () => {
  // set initial state inital value 0
  const [count, setCount] = useState(0);
  // helper functions that will set state based on which button is clicked
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <main className='ui container centered grid'>
      <h1 className='row'>Counter</h1>
      <h1 className='count row'>{count}</h1>
      <div className='buttons row'>
        <button className='ui button' onClick={subtract}>
          -
        </button>
        <button className='ui button' onClick={add}>
          +
        </button>
      </div>
    </main>
  );
};

export default App;
