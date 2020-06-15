import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { formatSlug } from '../../helpers/slug';

import './ProductDetails.css';

function ProductDetailsPage() {
  const { slug } = useParams();

  const { products } = useSelector((state) => state.products);

  const [product, setProduct] = useState({});

  const [sizeSelected, setSizeSelected] = useState('');

  useEffect(() => {
    const prod = products.find(({ name }) => formatSlug(name) === slug);
    if (prod) {
      setProduct(prod);
    }
  }, [products, slug]);

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

        <button className="add-to-cart" disabled={!sizeSelected}>
          Adicionar ao Carrinho
        </button>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
