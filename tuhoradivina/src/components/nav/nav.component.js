import React, { useState } from 'react';
import './nav.styles.scss';

const NavBar = ({ handleYear }) => {
  const [active, setActive] = useState('sixteen');

  return (
    <nav className="main-menu">
      <ul>
        <li
          onClick={() => {
            handleYear('sixteen')
            setActive('sixteen')
          }}
          className={`
            ${active === 'sixteen' ? 'active-menu' : null}
          `}
        >
          <a href="#">2016</a>
        </li>

        <li
          onClick={() => {
            handleYear('fifteen')
            setActive('fifteen')
          }}
          className={`
            ${active === 'fifteen' ? 'active-menu' : null}
          `}
        >
          <a href="#">2015</a>
        </li>

        <li
          onClick={() => {
            handleYear('fourteen')
            setActive('fourteen')
          }}
          className={`
            ${active === 'fourteen' ? 'active-menu' : null}
          `}>
          <a href="#">2014</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;