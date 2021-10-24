import React, { useState } from 'react';
import Routes from '../src/routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './services/context';

export default function App() {
  const [state, setState] = useState('');

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ state, setState }}>
          <Routes />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
