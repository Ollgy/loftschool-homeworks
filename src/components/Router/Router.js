// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Search from '../Search';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/> 
      <PrivateRoute  path='/search' component={Search}/>
    </Switch>
  </BrowserRouter>
);