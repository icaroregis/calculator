import React, { useState } from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import './style.css';

export default function Calculator() {
  const [buttonValue, setButtonValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [result, setResult] = useState('');
  const [accumulator, setAccumulator] = useState([0, 0]);
  const [mathOperation, setMathOperation] = useState(false);

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

  function addDigitDisplay(digit) {
    setButtonValue(number.target.value);
    if (
      (digit === '+' || digit === '-' || digit === '*' || digit === '/') &&
      mathOperation
    ) {
      console.log('+-*/');
      setMathOperation(false);
      setDisplayValue(result + digit);
      return;
    }

    if (mathOperation) {
      setDisplayValue(digit);
      setMathOperation(false);
    }
  }

  return (
    <div className="ContainerCalculator">
      <h1 className="TitleCalculator">Calculadora</h1>
      <div className="ThisCalculator">
        <Display value={displayValue} />
        <Buttons onClick={clearMemory} label="AC" className="triple" />
        <Buttons onClick={setOperation} label="/" className="operation" />
        <Buttons onClick={addDigitDisplay} label="7" />
        <Buttons onClick={addDigitDisplay} label="8" />
        <Buttons onClick={addDigitDisplay} label="9" />
        <Buttons onClick={setOperation} label="*" className="operation" />
        <Buttons onClick={addDigitDisplay} label="4" />
        <Buttons onClick={addDigitDisplay} label="5" />
        <Buttons onClick={addDigitDisplay} label="6" />
        <Buttons onClick={setOperation} label="-" className="operation" />
        <Buttons onClick={addDigitDisplay} label="1" />
        <Buttons onClick={addDigitDisplay} label="2" />
        <Buttons onClick={addDigitDisplay} label="3" />
        <Buttons onClick={setOperation} label="+" className="operation" />
        <Buttons onClick={addDigitDisplay} label="0" className="double" />
        <Buttons onClick={addDigitDisplay} label="." />
        <Buttons onClick={setOperation} label="=" className="operation" />
      </div>
    </div>
  );
}
