import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderComponent = (Component)  => {
  render(
    <Component />,
    document.getElementById('react-root')
  );
}

renderComponent(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    renderComponent(App);
 });
}