import React from 'react';
import PropTypes from 'prop-types';

import './SearchItem.css';

function SearchItem({ image, name, price, installments }) {
  return (
    <section className="search__item">
      <img src={image} alt={name} className="item__image" />

      <div className="item__details">
        <h2 className="item__text">{name}</h2>
        <h2 className="item__text">{price}</h2>
        <small className="item__text item__text--small">{installments}</small>
      </div>
    </section>
  );
}

SearchItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  installments: PropTypes.string.isRequired,
};

export default SearchItem;
