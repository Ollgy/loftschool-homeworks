// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';


class AppRouter extends PureComponent {
  render() {
    return <div className='App'>
      <Switch>
        <Route path='/' exact component={Search}/>
        <Route path='/shows/:id'  component={ShowPage}/>
      </Switch>
    </div>
  }
} 

export default AppRouter;