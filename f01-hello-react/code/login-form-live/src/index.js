import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const component = (
  <div>
    <App />
    <App />
  </div>
);

ReactDOM.render(
  component,
  document.getElementById('root'));
registerServiceWorker();
