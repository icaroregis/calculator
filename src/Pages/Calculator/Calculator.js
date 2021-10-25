import React, { useState } from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import './style.css';

export default function Calculator() {
  const [buttonValue, setButtonValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [mathOperation, setMathOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [currentValue, setCurrentValue] = useState(0);

  function clearMemory(e) {
    console.log(e);
    setButtonValue(e.target.value);
    setDisplayValue('0');
    setClearDisplay(false);
    setMathOperation(null);
    setValues([0, 0]);
    setCurrentValue(0);
  }

  function setOperation(operation) {
    setButtonValue(operation.target.value);
  }

  function addDigit(number) {
    setButtonValue(number.target.value);
    if (number === '.' && setDisplayValue(displayValue.includes('.'))) {
      return;
    }
  }

  console.log(buttonValue);

  return (
    <div className="ContainerCalculator">
      <h1 className="TitleCalculator">Calculadora</h1>
      <div className="ThisCalculator">
        <Display value={displayValue} />
        <Buttons onClick={clearMemory} label="AC" className="triple" />
        <Buttons onClick={setOperation} label="/" className="operation" />
        <Buttons onClick={addDigit} label="7" />
        <Buttons onClick={addDigit} label="8" />
        <Buttons onClick={addDigit} label="9" />
        <Buttons onClick={setOperation} label="*" className="operation" />
        <Buttons onClick={addDigit} label="4" />
        <Buttons onClick={addDigit} label="5" />
        <Buttons onClick={addDigit} label="6" />
        <Buttons onClick={setOperation} label="-" className="operation" />
        <Buttons onClick={addDigit} label="1" />
        <Buttons onClick={addDigit} label="2" />
        <Buttons onClick={addDigit} label="3" />
        <Buttons onClick={setOperation} label="+" className="operation" />
        <Buttons onClick={addDigit} label="0" className="double" />
        <Buttons onClick={addDigit} label="." />
        <Buttons onClick={setOperation} label="=" className="operation" />
      </div>
    </div>
  );
}
