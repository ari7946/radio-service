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
          <a href="#">Temporada 1</a>
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
          <a href="#">Temporada 2</a>
        </li>

        <li
          onClick={() => {
            handleYear('fourteen')
            setActive('fourteen')
          }}
          className={`
            ${active === 'fourteen' ? 'active-menu' : null}
          `}>
          <a href="#">Temporada 3</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;