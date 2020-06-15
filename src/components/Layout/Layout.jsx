import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';

import './Layout.css';

function Layout() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default Layout;
