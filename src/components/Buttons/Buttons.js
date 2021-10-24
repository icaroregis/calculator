import React, { useState } from 'react';
import './style.css';

export default function ({ label, className }) {
  const [buttonValue, setButtonValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [clearDisplay, setClearDisplay] = useState('');
  const [operation, setOperation] = useState('');
  const [values, setValues] = useState([0, 0]);
  const [currentValue, setCurrentValue] = useState(0);

  console.log(buttonValue);

  return (
    <>
      <button
        value={label}
        onClick={({ target }) => setButtonValue(target.value)}
        className={`ButtonsOfCalculator 
      ${className === 'operation' ? 'operation' : ''}   
      ${className === 'double' ? 'double' : ''}
      ${className === 'triple' ? 'triple' : ''}`}
      >
        {label}
      </button>
    </>
  );
}
