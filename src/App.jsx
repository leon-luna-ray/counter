import React, { useState, useEffect, useRef } from 'react';
import { Elm } from './Main.elm'
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const elmNode = useRef(null);

  useEffect(() => {
    const app = Elm.Main.init({
      node: document.getElementById("elm-node")
    })
    const userCount = localStorage.getItem('count');
    if (userCount) {
      setCount(userCount);
    }

  }, []);

  const add = () => {
    const sum = parseInt(count) + 1;
    setCount(sum);
  };
  const subtract = () => {
    const diff = parseInt(count) - 1;
    setCount(diff);
  };
  const reset = () => {
    if (window.confirm('Do you want to reset?')) {
      setCount(0);
    }
  };

  useEffect(() => {
    localStorage.setItem('count', parseInt(count));
  }, [count]);

  return (
    <main className='ui container centered grid center-screen'>
      {/* <h1 className='title row'>Counter</h1>
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
      </button> */}
      <div id="elm-node" ref={elmNode}></div>
    </main>
  );
};

export default App;
