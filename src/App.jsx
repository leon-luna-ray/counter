import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // set initial state initial value 0
  const [count, setCount] = useState(0);

  // Check local storage for previous count and set state, bug on reload may need to try a custom hook
  useEffect(() => {
    const userCount = localStorage.getItem('count');
    if (userCount) {
      // Bug may have been due to local storage coming back as a string ]
      setCount(userCount);
    }
    // The empty array will run hook on mount
  }, []);

  // helper functions that will set state based on which button is clicked
  const add = () => {
    const sum = parseInt(count) + 1;
    setCount(sum);
  };
  const subtract = () => {
    const diff = parseInt(count) - 1;
    setCount(diff);
  };
  const reset = () => {
    // prompt user to confirm reset in case of accidental press
    if (window.confirm('Do you want to reset?')) {
      setCount(0);
    }
  };

  useEffect(() => {
    // Save to local storage on state change
    localStorage.setItem('count', parseInt(count));
    // This will run every time count/state is updated
  }, [count]);

  return (
    <main className='ui container centered grid center-screen'>
      <h1 className='title row'>Counter</h1>
      <h1 className='count row'>{count}</h1>
      <div className='buttons row'>
        <button className='add-sub massive ui button' onClick={subtract}>
          -
        </button>
        <button className='add-sub massive ui button' onClick={add}>
          +
        </button>
      </div>
      <button className='reset-btn large negative ui button' onClick={reset}>
        Reset
      </button>
      {/* <button>Dark Mode</button> */}
    </main>
  );
};

export default App;
