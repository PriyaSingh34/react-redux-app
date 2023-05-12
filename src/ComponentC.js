// ComponentC.js
import React from 'react';
import "./ComponentC.css"
import { useSelector } from 'react-redux';

function ComponentC() {
  const inputValue = useSelector(state => state.input);

  return (
    <div className='outer inner'>
      <h2 className='text'>Input value: {inputValue}</h2>
    </div>
  );
}

export default ComponentC;