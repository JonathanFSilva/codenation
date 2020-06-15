import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { formatSlug } from '../../helpers/slug';

import { addItemToCart } from '../../store/modules/cart/actions';

import './ProductDetails.css';

function ProductDetailsPage() {
  const { slug } = useParams();

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const [product, setProduct] = useState({});

  const [sizeSelected, setSizeSelected] = useState('');

  useEffect(() => {
    const prod = products.find(({ name }) => formatSlug(name) === slug);
    if (prod) {
      setProduct(prod);
    }
  }, [products, slug]);

  function addToCart() {
    const { name, image, actual_price, installments } = product;

    const data = {
      name,
      image,
      price: actual_price,
      installments,
      size: sizeSelected,
      qtde: 1,
    };

    dispatch(addItemToCart(data));
  }

  const {
    name,
    image,
    actual_price,
    regular_price,
    on_sale,
    discount_percentage,
    installments,
    sizes,
  } = product;

  return (
    <section className="product__container">
      <div
        className={`product__image ${!!on_sale && 'product__image--on-sale'}`}
        data-discount={`-${discount_percentage}`}
      >
        <img src={image} alt={name} />
      </div>

      <div className="group">
        <h2 className="product__name">{name}</h2>

        <div className="product__payment">
          <div className="product__price">
            {!!on_sale && <small>{regular_price}</small>}
            {actual_price}
          </div>

          <p className="product__price">em até {installments}</p>
        </div>

        <ul className="size-list">
          {!!sizes &&
            sizes
              .filter(({ available }) => !!available)
              .map(({ size }) => (
                <li
                  className={`list__item ${
                    size === sizeSelected && 'list__item--selected'
                  }`}
                  onClick={() => setSizeSelected(size)}
                >
                  {size}
                </li>
              ))}
        </ul>

        <button
          className="add-to-cart"
          disabled={!sizeSelected}
          onClick={() => addToCart()}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
