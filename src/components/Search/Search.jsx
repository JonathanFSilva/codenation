import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchItem from '../SearchItem';

import './Search.css';

function Search() {
  const [text, setText] = useState('');

  const { products } = useSelector((state) => state.products);

  function getResults() {
    return products.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase()),
    );
  }

  return (
    <section className="search-wrapper">
      <input
        type="text"
        className="search__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="search__results">
        {getResults().map(
          ({ image, name, actual_price, installments }, index) => (
            <SearchItem
              key={index}
              image={image}
              name={name}
              price={actual_price}
              installments={installments}
            />
          ),
        )}
      </div>
    </section>
  );
}

export default Search;
