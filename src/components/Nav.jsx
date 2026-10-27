import React from 'react';

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src="" alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/about" className="nav__link">
              Books           </a>
          </li>
          
        </ul>
     </div>
    </nav>
  );
}

export default Nav;   