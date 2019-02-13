import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//<Redux>
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'
//</Redux>
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
const store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>
    , rootElement);

serviceWorker.unregister();
