import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/product/:slug', component: ProductDetails, exact: true },
];

export default routes;
