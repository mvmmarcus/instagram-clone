import React from 'react';

import './Loading.scss';

const Loading = () => (
  <div data-testid="loading" className="loading">
    <div className='preloader'>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>

    Carregando
  </div>
);

export default Loading;
