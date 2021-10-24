import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from '../pages/Calculator/Calculator';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Calculator} />
    </Switch>
  );
}
