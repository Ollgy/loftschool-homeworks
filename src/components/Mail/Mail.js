// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import style from './Mail.module.css';

const Mail = ({ body, title, dir, label, ...rest }) => 
    <div className={style.mailItemContainer}>
      <p className={`t-mail-${dir}`}>
        {`${label}: ${rest[dir]}`}</p>
      <p className='t-mail-body'>{body}</p>
  </div>


export default Mail;