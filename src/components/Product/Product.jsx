import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatSlug } from '../../helpers/slug';

import './Product.css';

function Product({ image, name, regularPrice, price, onSale, discount }) {
  return (
    <Link
      to={`product/${formatSlug(name)}`}
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
    </Link>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  regularPrice: PropTypes.string,
  price: PropTypes.string,
  onSale: PropTypes.bool,
  discount: PropTypes.string,
};

Product.defaultProps = {
  image: '',
  name: '',
  regularPrice: '',
  price: '',
  onSale: false,
  discount: '',
};

export default Product;
