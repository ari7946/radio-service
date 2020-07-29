import React from 'react';
import './nav.styles.scss';

const NavBar = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a href="">2016</a>
        </li>

        <li>
          <a href="">2015</a>
        </li>

        <li>
          <a href="">2014</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;