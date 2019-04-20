import React, { PureComponent } from 'react';
import expected from './expected';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    password: '',
    isAuthorized: false,
    authorizeError: ''
  }

  authorize = (email, password) => {
    this.setState({
      email: email,
      password: password,
      isAuthorized: email === expected['email'] && password === expected['password'],
      authorizeError: email !== expected['email'] || password !== expected['password']
        ? 'Email или пароль введён не верно'
        : ''
    });
  }

  logout = () => {
    this.setState({
      email: '',
      password: '',
      isAuthorized: false,
      authorizeError: ''
    });
  }

  getProviderValue = () => ({
    isAuthorized: this.state.isAuthorized, 
    authorize: this.authorize, 
    authorizeError: this.state.authorizeError, 
    email: this.state.isAuthorized ? this.state.email : '',
    logout: this.logout,
  });

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
