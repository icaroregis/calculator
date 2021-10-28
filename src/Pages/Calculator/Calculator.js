import React, { useState } from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import './style.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [oldDisplayValue, setOldDisplayValue] = useState(0);
  const [mathOperation, setMathOperation] = useState(0);

  function clearMemory() {
    setDisplayValue(0);
    return;
  }

  function setOperation(operator) {
    const valueOperator = operator.target.value;
    setMathOperation(valueOperator);
    setOldDisplayValue(displayValue);
    setDisplayValue(valueOperator);
  }

  function calculate() {
    if (mathOperation === '/') {
      setDisplayValue(Number(oldDisplayValue) / Number(displayValue));
    } else if (mathOperation === '*') {
      setDisplayValue(Number(oldDisplayValue) * Number(displayValue));
    } else if (mathOperation === '+') {
      setDisplayValue(Number(oldDisplayValue) + Number(displayValue));
    } else {
      setDisplayValue(Number(oldDisplayValue) - Number(displayValue));
    }
  }

  function addDigitDisplay(digit) {
    const numberValue = digit.target.value;
    if (
      displayValue === 0 ||
      displayValue === '*' ||
      displayValue === '+' ||
      displayValue === '-' ||
      displayValue === '/'
    ) {
      setDisplayValue(digit.target.value);
    } else {
      setDisplayValue(displayValue + numberValue);
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
        <Buttons onClick={calculate} label="=" className="operation" />
      </div>
    </div>
  );
}
