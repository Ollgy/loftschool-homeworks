// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.

import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: RouteComponent, 
      isAuthorized,
      loginPath,
      ...rest  } = this.props;

    return <Route {...rest} 
      render={ routerProps => 
        isAuthorized
          ? <RouteComponent {...routerProps}/>
          : <Redirect to='/'/>
      }/>
  }
}

export default withAuth(PrivateRoute);
