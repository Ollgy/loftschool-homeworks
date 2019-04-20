import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header: Header, footer: Footer, children } = this.props;

    return (  
      <Fragment>
        {Header 
          ? this.renderHeader(
            Header, 
            <SectionTitle className='header__title' children='Header'/>) 
          : null}
        <main className={`main ${Header ? 'main--with-header' : ''} ${Footer ? 'main--with-footer' : ''}`}>
          <SectionTitle className='main__title' children='Main'/>
          {children}
        </main>
        {Footer 
          ? this.renderFooter(
            Footer, 
            <SectionTitle className='footer__title' children='Footer'/>) 
          : null}
      </Fragment>
    )
  }

  renderHeader(Header, HeaderChildren) {
    return <header className='header'>
      <Header children={HeaderChildren}/>
    </header>
  }

  renderFooter(Footer, FooterChildren) {
    return <footer className='footer'>
      <Footer children={FooterChildren}/>
    </footer>
  }
}

export default Layout;
