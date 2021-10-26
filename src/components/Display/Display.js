import React from 'react';
import './style.css';

export default function ({ value, result }) {
  return (
    <div className="display">
      <span>{value}</span>
      <span>{result}</span>
    </div>
  );
}
