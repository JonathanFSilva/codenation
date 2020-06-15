import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product';

import './ProductList.css';

function ProductList({ products }) {
  return (
    <section className="products__list">
      {products.map(
        (
          {
            image,
            name,
            regular_price,
            actual_price,
            on_sale,
            discount_percentage,
          },
          index,
        ) => (
          <Product
            key={index}
            image={image}
            name={name}
            regularPrice={regular_price}
            price={actual_price}
            onSale={on_sale}
            discount={discount_percentage}
          />
        ),
      )}
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
