// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import './Home.module.css'

const Home = () => 
  <div className='content'>
    <h3 className='title' children='Home'/>
    <div className='content-container'>
      <p className='t-greeting'>Приветствуем в почтовом клиенте!</p>
    </div>
  </div>

export default Home;