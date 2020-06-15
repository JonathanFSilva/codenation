import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Drawer from '../Drawer';
import CartList from '../CartList';
import Search from '../Search';

import routes from '../../routes';

import { closeCartDrawer } from '../../store/modules/cart/actions';
import { closeSearchDrawer } from '../../store/modules/search/actions';

import './Layout.css';

function Layout() {
  const dispatch = useDispatch();

  const { isOpen: cartIsOpen } = useSelector((state) => state.cart);
  const { isOpen: searchIsOpen } = useSelector((state) => state.search);

  return (
    <BrowserRouter>
      <Header />

      <main className="main-wrapper">
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </main>

      <Drawer
        isOpen={cartIsOpen}
        title="Carrinho"
        onClose={() => dispatch(closeCartDrawer())}
      >
        <CartList />
      </Drawer>

      <Drawer
        isOpen={searchIsOpen}
        title="Buscar Produtos"
        onClose={() => dispatch(closeSearchDrawer())}
      >
        <Search />
      </Drawer>
    </BrowserRouter>
  );
}

export default Layout;
