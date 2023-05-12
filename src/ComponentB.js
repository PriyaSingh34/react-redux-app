import React from 'react';
import "./ComponentB.css"
import { useDispatch } from 'react-redux';
import { setInputValue } from './Store';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  return (
    <div className='outer'>
        <div className="inner">
        <label className='text' htmlFor="input-field">Input field:</label>
      <input
      className='inputb'
        type="text"
        id="input-field"
        onChange={handleInputChange}
      />
        </div>
      
    </div>
  );
};

export default ComponentB;