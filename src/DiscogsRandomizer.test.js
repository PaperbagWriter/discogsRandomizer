import React from 'react';
import ReactDOM from 'react-dom';
import DiscogsRandomizer from './DiscogsRandomizer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DiscogsRandomizer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
