import React from 'react';

const Add = ({ updateCount }) => {
  return (
    <button className='ui button' onClick={updateCount(1)}>
      +
    </button>
  );
};

export default Add;
