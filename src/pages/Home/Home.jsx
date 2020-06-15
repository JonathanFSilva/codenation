import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';

import { getProductsRequest } from '../../store/modules/products/actions';

function HomePage() {
  const dispatch = useDispatch();

  const { products, loadingProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return loadingProducts ? <Loading /> : <ProductList products={products} />;
}

export default HomePage;
