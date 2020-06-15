import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Drawer from '../Drawer';
import CartList from '../CartList';

import routes from '../../routes';

import { closeCartDrawer } from '../../store/modules/cart/actions';

import './Layout.css';

function Layout() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.cart);

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
        isOpen={isOpen}
        title="Carrinho"
        onClose={() => dispatch(closeCartDrawer())}
      >
        <CartList />
      </Drawer>
    </BrowserRouter>
  );
}

export default Layout;
