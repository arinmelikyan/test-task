import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store';
import App from './App';

const store = createStore(
  reducers, 
  applyMiddleware(thunk),
  // window.devToolsExtension && window.devToolsExtension(), 
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
