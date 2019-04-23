// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import './Mail.module.css';

const Mail = ({ body, title, dir, label, ...rest }) => 
  <div className='content'>
    <h3 className='title' children={title}/>
    <div className='mail-item-container'>
      <p className={`t-mail-${dir}`}>
        {`${label}: ${rest[dir]}`}</p>
      <p className='t-mail-body'>{body}</p>
    </div>
  </div>


export default Mail;