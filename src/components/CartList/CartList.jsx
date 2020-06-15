import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../CartItem';

import './CartList.css';

function CartList() {
  const { items } = useSelector((state) => state.cart);

  function getTotal() {
    if (!items.length) return '0.00';

    const total = items
      .map(({ price, qtde }) => ({
        price: parseFloat(price.replace('R$', '').replace(/,/, '.').trim()),
        qtde,
      }))
      .reduce((a, b) => {
        return a.price * a.qtde + b.price * b.qtde;
      });

    if (typeof total === 'object') {
      return total.price * total.qtde;
    }

    return total.toFixed(2);
  }

  return (
    <section className="cart-wrapper">
      <div className="cart__list">
        {items.map(
          ({ image, name, price, size, installments, qtde }, index) => (
            <CartItem
              key={index}
              image={image}
              name={name}
              price={price}
              size={size}
              installments={installments}
              qtde={qtde}
            />
          ),
        )}
      </div>

      <footer className="cart__footer">Subtotal - R$ {getTotal()}</footer>
    </section>
  );
}

export default CartList;
