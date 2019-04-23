// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import  Home  from '../Home';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import  './AppRouter.module.css';

const  AppRouter = () => 
    <div className='wrapper'>
    <div className='container'>
      <nav className='nav'>
        <ul className='navList t-nav-list'>
          <li className='navElement'>
            <NavLink exact to='/app' className='link t-link-home' activeClassName='active' children='Home'/>
          </li>
          <li className='navElement'>
            <NavLink exact to='/app/inbox' className='link t-link-inbox' activeClassName='active' children='Inbox'/>
          </li>
          <li className='navElement'>
            <NavLink exact to='/app/outbox' className='link t-link-outbox' activeClassName='active' children='Outbox'/>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/app' exact component={Home}/>
        <Route path='/app/inbox' exact component={InboxList}/>
        <Route path='/app/outbox' exact component={OutboxList}/>
        <Route path='/app/inbox/:id'  component={InboxMail}/>
        <Route path='/app/outbox/:id'  component={OutboxMail}/>
      </Switch>
  
    </div>
  </div>

export default AppRouter; 