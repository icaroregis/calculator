import React from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import './style.css';

export default function Calculator() {
  const buttonContent = [
    { id: 1, label: 'AC', type: 'triple' },
    { id: 2, label: '/', type: 'operation' },
    { id: 3, label: '7' },
    { id: 4, label: '8' },
    { id: 5, label: '9' },
    { id: 6, label: '*', type: 'operation' },
    { id: 7, label: '4' },
    { id: 8, label: '5' },
    { id: 9, label: '6' },
    { id: 10, label: '-', type: 'operation' },
    { id: 11, label: '1' },
    { id: 12, label: '2' },
    { id: 13, label: '3' },
    { id: 14, label: '+', type: 'operation' },
    { id: 15, label: '0', type: 'double' },
    { id: 16, label: '.' },
    { id: 17, label: '=', type: 'operation' },
  ];

  function teste(e) {
    console.log(e);
  }
  return (
    <div className="ContainerCalculator">
      <h1 className="TitleCalculator">Calculadora</h1>
      <div className="ThisCalculator">
        <Display value={100} />
        {buttonContent.map((button) => {
          return (
            <Buttons
              className={button.type}
              key={button.id}
              label={button.label}
            />
          );
        })}
      </div>
    </div>
  );
}
