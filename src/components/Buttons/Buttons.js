import React from 'react';
import './style.css';

export default function (props) {
  return (
    <>
      <button
        value={props.label}
        onClick={(e) => props.onClick(e)}
        className={`ButtonsOfCalculator 
      ${props.className === 'operation' ? 'operation' : ''}   
      ${props.className === 'double' ? 'double' : ''}
      ${props.className === 'triple' ? 'triple' : ''}`}
      >
        {props.label}
      </button>
    </>
  );
}
