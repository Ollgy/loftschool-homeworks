// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.authorize(
      e.target.email.value,
      e.target.password.value
    );

  }
  
  render() {
    const { email, password } = this.state;

    return this.props.isAuthorized ? (
      <Redirect to='/app'/>
    ) : (
      <div className={style.bg}>
        <form onSubmit={this.handleSubmit} className={`${style.form} t-form`}>
          <p>
            <label htmlFor='email'>
              <span className={style.labelText} children='Почта'/>
            </label>
            <input type='text' name='email' 
              value={email}
              className={`${style.input} t-input-email`} 
              onChange={this.handleInputChange}/>
          </p>
          <p>
            <label htmlFor='password'>
              <span className={style.labelText} children='Пароль'/>
            </label>
            <input type='password' name='password' 
              value={password}
              className={`${style.input} t-input-password`} 
              onChange={this.handleInputChange}/>
          </p>
          <p className={style.error}>{this.props.authError ? 'Почта или пароль неверные' : ''}</p>
          <div className={style.buttons}>
            <button className={`${style.button} t-login`}>Войти</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(LoginForm); 