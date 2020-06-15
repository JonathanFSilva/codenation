import React from 'react';
import PropTypes from 'prop-types';
import { RiCloseLine } from 'react-icons/ri';

import './Drawer.css';

function Drawer({ isOpen, title, children, onClose }) {
  return (
    <section className={`drawer-wrapper ${!!isOpen && 'drawer-wrapper--show'}`}>
      <aside className="drawer-container">
        <header className="drawer__header">
          <section className="header">
            <span className="header__icon" onClick={() => onClose()}>
              <RiCloseLine />
            </span>
            <h2 className="header__title">{title}</h2>
          </section>
        </header>

        <main className="drawer__main">{children}</main>
      </aside>
    </section>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Drawer;
