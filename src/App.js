import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // set initial state initial value 0
  const [count, setCount] = useState(0);

  // Check local storage for previous count and set state, bug on reload may need to try a custom hook

  useEffect(() => {
    const userCount = localStorage.getItem('count');
    if (userCount) {
      localStorage.clear();
      setCount(userCount);
    }
    // The empty array will run hook on mount
  }, []);

  // helper functions that will set state based on which button is clicked
  const add = () => {
    const newSum = parseInt(count) + 1;
    setCount(newSum);
  };
  const subtract = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    // Save to local storage on state change
    localStorage.setItem('count', parseInt(count));
    // This will run every time count/state is updated
  }, [count]);

  return (
    <main className='ui container centered grid center-screen'>
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
      <button className='ui button red' onClick={reset}>
        Reset
      </button>
    </main>
  );
};

export default App;
