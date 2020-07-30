import React from 'react';
import './nav.styles.scss';

const NavBar = ({ handleYear }) => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a 
            href="#"
            onClick={() => handleYear('sixteen')}
          >2016</a>
        </li>

        <li>
          <a 
            href="#"
            onClick={() => handleYear('fifteen')}
          >2015</a>
        </li>

        <li>
          <a 
            href="#"
            onClick={() => handleYear('fourteen')}
          >2014</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;