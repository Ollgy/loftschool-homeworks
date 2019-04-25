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
import  style from './AppRouter.module.css';

const  AppRouter = (props) => {
    let location;

    if (props.location.pathname.match(/inbox/g)) {
      location = 'Inbox';
    } else if (props.location.pathname.match(/outbox/g)) {
      location = 'Outbox';
    } else {
      location = 'Home';
    }

    return <div className={style.wrapper}>
      <div className={style.container}>
        <nav className={style.nav}>
          <ul className={`${style.navList} t-nav-list`}>
            <li className={style.navElement}>
              <NavLink exact to='/app' className={`${style.link} t-link-home`} activeClassName='active' children='Home'/>
            </li>
            <li className={style.navElement}>
              <NavLink exact to='/app/inbox' className={`${style.link} t-link-inbox`} activeClassName='active' children='Inbox'/>
            </li>
            <li className={style.navElement}>
              <NavLink exact to='/app/outbox' className={`${style.link} t-link-outbox`} activeClassName='active' children='Outbox'/>
            </li>
          </ul>
        </nav>
        <div className={style.content}>
          <h3 className={style.title} children={location}/>
          <Switch>
            <Route path='/app' exact component={Home}/>
            <Route path='/app/inbox' exact component={InboxList}/>
            <Route path='/app/outbox' exact component={OutboxList}/>
            <Route path='/app/inbox/:id'  component={InboxMail}/>
            <Route path='/app/outbox/:id'  component={OutboxMail}/>
          </Switch>
        </div>
      </div>
  </div>
}

export default AppRouter; 