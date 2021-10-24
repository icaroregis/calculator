import React from 'react';
import './style.css';

export default function ({ label }) {
  return (
    <>
      <button className="ButtonsOfCalculator">{label}</button>
    </>
  );
}
