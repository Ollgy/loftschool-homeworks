// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import './LoginForm.module.css'

class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.authorize(
      e.target.email.value,
      e.target.password.value
    );

  }
  
  render() {
    return this.props.isAuthorized
      ? <Redirect to='/app'/>
      : <div className='bg'>
          <form onSubmit={this.handleSubmit} className='form t-form'>
            <p>
              <label htmlFor='email'>
                <span className='labelText' children='Почта'/>
              </label>
              <input type='text' name='email' className='input t-input-email'/>
            </p>
            <p>
              <label htmlFor='password'>
                <span className='labelText' children='Пароль'/>
              </label>
              <input type='password' name='password' className='input t-input-password'/>
            </p>
            <p className='error'>{this.props.authError ? 'Почта или пароль неверные' : ''}</p>
            <div className='buttons'>
              <button className='button t-login'>Войти</button>
            </div>
          </form>
        </div>
  }
}

export default withAuth(LoginForm); 