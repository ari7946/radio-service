import React from 'react';
import Nav from '../nav/nav.component';
import './header.styles.scss';

const Header = ({ handleYear }) => {
  return (
    <header>
      <h1 className="header-title">Radio Tu Hora Divina</h1>
      <Nav handleYear={handleYear} />
    </header>
  )
}

export default Header;