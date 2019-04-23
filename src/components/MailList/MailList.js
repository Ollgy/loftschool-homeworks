// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import { NavLink } from 'react-router-dom';
import './MailList.module.css';

const MailList = ({ data, path, dir }) => 
  <div className='mail-container'>
    <div className={`t-${dir}-list`}>
      {
        data.map(item =>
          <NavLink key={item.id} 
            to={`${path}${item.id}`} 
            className='link' 
            activeClassName='active'
            children={item.body}/>)
      }
    </div>
  </div>

export default MailList;