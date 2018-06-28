import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DiscogsRandomizer from './DiscogsRandomizer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DiscogsRandomizer />, document.getElementById('root'));
registerServiceWorker();
