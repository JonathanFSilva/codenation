import React from 'react';
import ReactLoading from 'react-loading';

import './Loading.css';

function Loading() {
  return (
    <section className="loading__container">
      <ReactLoading type="bars" color="#d29460" height="80px" width="80px" />
    </section>
  );
}

export default Loading;
