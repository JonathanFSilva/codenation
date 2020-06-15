import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

function Product({ image, name, regularPrice, price, onSale, discount }) {
  return (
    <article
      className={`product ${!!onSale && 'product--on-sale'}`}
      data-discount={`-${discount}`}
    >
      {!!image ? (
        <img src={image} alt={name} className="product__image" />
      ) : (
        <div className="no-image">Imagem Indisponível</div>
      )}

      <div className="product__details">
        <h2 className="product__name">{name}</h2>
        <h4 className="product__price">
          {!!onSale && <small>{regularPrice}</small>}
          {price}
        </h4>
      </div>
    </article>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regularPrice: PropTypes.string,
  price: PropTypes.string.isRequired,
  onSale: PropTypes.bool,
  discount: PropTypes.string,
};

Product.defaultProps = {
  regularPrice: '',
  onSale: false,
  discount: '',
};

export default Product;
