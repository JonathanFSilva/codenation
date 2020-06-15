import React from 'react';
import PropTypes from 'prop-types';
import { RiSubtractLine, RiAddLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import {
  updateItemQuantity,
  removeItemFromCart,
} from '../../store/modules/cart/actions';

import './CartItem.css';

function CartItem({ image, name, price, size, installments, qtde }) {
  const dispatch = useDispatch();

  return (
    <section className="cart__item">
      <img src={image} alt={name} className="item__image" />

      <div className="item__details">
        <h2 className="item__text">{name}</h2>
        <h2 className="item__text">{price}</h2>

        <small className="item__text item__text--small">Tam.: {size}</small>
        <small className="item__text item__text--small">{installments}</small>

        <div className="item__quantity">
          <button
            className="quantity__button"
            onClick={() =>
              dispatch(updateItemQuantity({ name, qtde: qtde - 1 }))
            }
            disabled={qtde <= 1}
          >
            <RiSubtractLine />
          </button>
          <input type="number" min={1} value={qtde} readOnly />
          <button
            className="quantity__button"
            onClick={() =>
              dispatch(updateItemQuantity({ name, qtde: qtde + 1 }))
            }
          >
            <RiAddLine />
          </button>
        </div>

        <button
          className="remove__button"
          onClick={() => dispatch(removeItemFromCart(name))}
        >
          Remover
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  qtde: PropTypes.number.isRequired,
};

export default CartItem;
