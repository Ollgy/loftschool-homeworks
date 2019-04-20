import React, { Fragment, PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return <Fragment>
      {this.props.children}
      <AuthConsumer>
        {({ isAuthorized, email }) => <p className='footer-message t-footer'>
          {isAuthorized
            ? `Вы вошли как ${email}`
            : 'Вы гость в этой системе'}
          </p>
        }
      </AuthConsumer>
    </Fragment>
  }
}

export default Footer;
