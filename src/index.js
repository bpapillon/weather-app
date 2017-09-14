import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Import reducers.
import appReducer from './containers/App/reducer';

// Create what the store will look like.
const rootReducer = combineReducers({
  app: appReducer,
});

// Provide a store to the Provider store prop.
const store = () => createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
