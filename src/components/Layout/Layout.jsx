import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../../store';

import Header from '../Header';

import routes from '../../routes';

import './Layout.css';

function Layout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />

          <main className="main-wrapper">
            <Switch>
              {routes.map(({ path, exact, component }) => (
                <Route
                  path={path}
                  exact={exact}
                  component={component}
                  key={path}
                />
              ))}
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Layout;
