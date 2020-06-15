import React from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiShoppingBag3Line } from 'react-icons/ri';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <span>FASHIONISTA</span>
        </Link>

        <div>
          <button className="header__button">
            <RiSearchLine />
          </button>

          <button
            className="header__button header__button--cart"
            data-count={2}
          >
            <RiShoppingBag3Line />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
