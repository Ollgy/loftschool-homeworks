import React, { Fragment, PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return  <Fragment>
      {this.props.children}
        <AuthConsumer>
          {({ isAuthorized, email, logout }) => {
            if (isAuthorized) {
              return <div className='header-menu'>
                <p className='header-menu__email header-email t-header-email'>{email}</p>
                <Button className='t-logout' children='Выйти' onClick={logout}/>
              </div>
            }
          }}
        </AuthConsumer>
    </Fragment>
  }
}

export default Header;
