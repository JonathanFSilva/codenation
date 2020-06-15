import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiSearchLine, RiShoppingBag3Line } from 'react-icons/ri';

import { openCartDrawer } from '../../store/modules/cart/actions';
import { openSearchDrawer } from '../../store/modules/search/actions';

import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <span>FASHIONISTA</span>
        </Link>

        <div>
          <button
            className="header__button"
            onClick={() => dispatch(openSearchDrawer())}
          >
            <RiSearchLine />
          </button>

          <button
            className={`header__button ${
              !!items.length && 'header__button--cart'
            }`}
            data-count={items.length}
            onClick={() => dispatch(openCartDrawer())}
          >
            <RiShoppingBag3Line />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
